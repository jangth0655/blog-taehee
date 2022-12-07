import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { ToggleNavProvider } from '../context/toggleNavContext';
import NextSEO from '../components/NextSEO';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToggleNavProvider>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <DefaultSeo {...NextSEO} />
      <Component {...pageProps} />
    </ToggleNavProvider>
  );
}

export default MyApp;
