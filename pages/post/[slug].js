/* 
  LEGAL:
    Licença Pública Mozilla, versão 2.0

    Este software está licenciado sob a Licença Pública Mozilla, versão 2.0 (a "Licença"); você pode não usar este arquivo, exceto em conformidade com a Licença. Você pode obter uma cópia da Licença em https://www.mozilla.org/MPL/2.0/.

    O(s) autor(es) detém(êm) os direitos autorais deste software. 2023 é o ano de criação deste software.

    De acordo com os termos da Licença, você pode usar, modificar e distribuir este software de acordo com os termos da Licença.

    Salvo disposição em contrário na Licença, o software é distribuído "COMO ESTÁ", SEM GARANTIAS OU CONDIÇÕES DE QUALQUER TIPO, expressas ou implícitas. Consulte a Licença para os detalhes específicos sobre as permissões e limitações sob a Licença.
    ---
    Desenvolvedor Original: LESS14(Felipe Maciel)
*/
import fs from "fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { Helmet } from "react-helmet";
import Image from "next/image";
import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import React, { useState } from "react";

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
  const fileName = fs.readFileSync(`posts/${slug}.mdx`, "utf-8");
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
    <div className="text-white prose mx-auto">
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
            color: #fff !important;
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
        <title>Dev Help Blog - {frontmatter.title}</title>
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
    </div>
  );
}
