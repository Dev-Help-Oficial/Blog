import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const fileName = fs.readFileSync(`posts/${slug}.mdx`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  } catch (error) {
    console.error(`404 Página não encontrada "${slug}":`, error);
    return {
      notFound: true,
    };
  }
}

export default function PostPage({ frontmatter, content }) {
  const router = useRouter();
  const currentURL = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  return (
    <div className="text-white prose mx-auto">
      <style>{`
strong {
  font-weight: bold;
  color: #fff;
}

h1 {
  font-size: 1.7em !important;
  padding: 5px;
}

h2 {
  font-size: 1.8em !important;
}

em {
  font-style: italic;
  color: #fff;
}

.prose :where(ol > li):not(:where([class~="not-prose"], [class~="not-prose"] *))::marker {
  color: #fff !important;
  font-size: 1.5em !important;
}

pre {
  overflow-x: hidden !important;
  overflow-y: auto !important;
  white-space: pre-wrap !important;
}

.prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  text-decoration: none !important;
  color: #6ea8fe !important;
}

.prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)):hover {
  text-decoration: underline dotted !important;
  color: #8bb9fe !important;
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
  color: #fff !important;
`}</style>

      <NextSeo
        title={frontmatter.title}
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
              type: "image/png",
            },
            { url: frontmatter.socialImage },
          ],
          siteName: "Dev Help | Blog",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <h3>{frontmatter.title}</h3>
      <Image
        width={650}
        height={340}
        alt={frontmatter.title}
        src={`/${frontmatter.socialImage}`}
      />
      <span>Autor: {frontmatter.author}</span>
      <Helmet>
        <title>Dev Help Blog - {frontmatter.title}</title>
      </Helmet>
      <div className="content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
