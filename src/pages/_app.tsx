import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalLayout } from 'src/components/uis/GlobalLayout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
