import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { ToggleNavProvider } from '../context/toggleNavContext';
import NextSEO from '../components/NextSEO';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToggleNavProvider>
      <DefaultSeo {...NextSEO} />
      <Component {...pageProps} />
    </ToggleNavProvider>
  );
}

export default MyApp;
