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
import ReactMarkdown from 'react-markdown';
import { Helmet } from "react-helmet";
import Image from "next/image";
import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter, content }) => (
        <div
          key={slug}
          className="border border-gray-600 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col hover:rounded-t-none"
        >
          <Helmet>
            <title>Dev Help Blog</title>
          </Helmet>
          <a
            href={`/post/${slug}`}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/post/${slug}`);
            }}
            className='hover:no-underline'
            title={frontmatter.title}
          >
            <Image
              width={650}
              height={340}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            />
            <h1 className="p-4">{frontmatter.title}</h1>
          </a>
        </div>
      ))}
    </div>
  );
}
