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