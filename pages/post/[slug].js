import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { Helmet } from 'react-helmet';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {

  return (
    
    <div className='prose mx-auto'>

    
          <h1>{frontmatter.title}</h1>
          <Helmet>
            <title>{frontmatter.title}</title>
          </Helmet>

      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
