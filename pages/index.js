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

// Importação de bibliotecas e módulos necessários
import fs from "fs"; // Sistema de arquivos do Node.js
import matter from "gray-matter"; // Análise de metadados de arquivos Markdown
import Tooltip from "@mui/material/Tooltip"; // Componente de tooltip do Material-UI
import Image from 'next/image'; // Componente para exibição de imagens otimizadas
import { Helmet } from "react-helmet"; // Componente para gerenciar o cabeçalho HTML
import { useRouter } from 'next/router'; // Roteador do Next.js

// Função que é executada durante a construção estática da página
export async function getStaticProps() {
  // Lê todos os arquivos no diretório "posts"
  const files = fs.readdirSync("posts");

  // Mapeia os arquivos para obter os metadados de cada post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", ""); // Remove a extensão do arquivo para obter o slug
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8"); // Lê o conteúdo do arquivo Markdown
    const { data: frontmatter } = matter(readFile); // Analisa os metadados do arquivo Markdown
    return {
      slug,
      frontmatter,
    };
  });

  // Retorna os posts como props para a página
  return {
    props: {
      posts,
    },
  };
}

// Componente principal da página inicial
export default function Home({ posts }) {
  const router = useRouter(); // Obtém o roteador do Next.js

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
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
          >
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
        </div>
      ))}
    </div>
  );
}
