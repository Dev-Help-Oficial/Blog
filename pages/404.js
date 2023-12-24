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

import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();
  return (
    <div className="text-center">
      <h1 className="text-3xl">Página não encontrada.</h1>
      <div className="p-3">
        <p>A página que você está procurando não existe.</p>
        <a
          className="link text-indigo-500 hover:underline"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            router.push(`/`);
          }}
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default Page404;
