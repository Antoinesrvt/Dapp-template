import type { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/globals.css';
import {Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  <div>
    <Navbar/>
    <Component {...pageProps} />
    <Footer />
    <Script src="https://kit.fontawesome.com/6e73e83c37.js" crossOrigin="anonymous"></Script>
  </div>
}

export default MyApp
