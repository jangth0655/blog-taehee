import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import { ToggleNavProvider } from '../context/toggleNavContext';
import SEO from '../seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToggleNavProvider>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ToggleNavProvider>
  );
}

export default MyApp;
