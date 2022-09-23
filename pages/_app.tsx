import type { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/globals.css';
import {Navbar, Footer } from '../components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
  <div>
    <Navbar/>
    <Component {...pageProps} />
    <Footer />
    <Script src="https://kit.fontawesome.com/6e73e83c37.js" crossOrigin="anonymous"></Script>
  </div>
  )
}
