import fs from 'fs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import { Helmet } from 'react-helmet';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

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

  const router = useRouter();
  const currentURL = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  return (
    <div className='text-white prose mx-auto'>
      <NextSeo 
      title={frontmatter.metaTitle} 
      description={frontmatter.metaDesc} 
      openGraph={{
        url: currentURL,
        title: frontmatter.metaTitle,
        description: frontmatter.metaDesc,
        images: [
          {
            url: frontmatter.socialImage,
            width: 650,
            height: 340,
            alt: frontmatter.title,
            type: 'image/png',
          },
          { url: frontmatter.socialImage },
        ],
        siteName: 'Dev Help | Blog',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      />
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
