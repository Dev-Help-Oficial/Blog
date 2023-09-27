import fs from 'fs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import { Helmet } from 'react-helmet';
import Image from 'next/image';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.mdx`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  const renderedHtml = md.render(content);

  return (
    <div className='text-white prose mx-auto'>
      <style>
        {`
          strong {
            font-weight: bold;
            color: white;
          }

          em {
            font-style: italic;
            color: white;
          }
          .markdown-heading,
          ul,
          ol,
          li,
          a,
          p,
          h3,
          h1,
          h2,
          strong,
          em,
          code {
            color: white !important;
          }
        `}
      </style>
      <h3>{frontmatter.title}</h3>
      <Image
         width={650}
         height={340}
         alt={frontmatter.title}
         src={`/${frontmatter.socialImage}`}
      />
      <span>Autor: {frontmatter.author}</span>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
    </div>
  );
}
