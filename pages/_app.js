import '../styles/globals.css';
import dynamic from 'next/dynamic'

function MyApp({ Component, pageProps }) {
  const Layout = dynamic(() => import('../components/layout'));


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
