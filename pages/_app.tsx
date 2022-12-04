import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToggleNavProvider } from '../context/toggleNavContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToggleNavProvider>
      <Component {...pageProps} />
    </ToggleNavProvider>
  );
}

export default MyApp;
