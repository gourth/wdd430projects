import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Garrett. I am married to my lovely wife Jill and we have a beautiful daughter named Lila. I love my family and the Kansas City Chiefs!</p>
        
      </section>
    </Layout>
  );
}