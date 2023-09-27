import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Image from 'next/image';
import { Helmet } from "react-helmet";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-600 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col hover:rounded-t-none"
        >
          <Helmet>
            <title>Home</title>
          </Helmet>
          <Link href={`/post/${slug}`}>
            <a className='hover:no-underline'>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <Tooltip title={frontmatter.title} arrow>
                <h1 className="p-4">{frontmatter.title}</h1>
              </Tooltip>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
