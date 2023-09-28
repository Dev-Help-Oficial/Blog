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
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  const Layout = dynamic(() => import('../components/layout'));


  return (
    <div className='layout'>
    <DefaultSeo 
      title='Dev Help Blog'
      description='Um Blog totalmente open-source onde artigos e tutorias sobre programação e assuntos relacionados serão postados, mirando principalmente novatos. Qualquer um pode postar seus próprios artigos!'
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}

export default MyApp;