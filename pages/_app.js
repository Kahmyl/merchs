import '../styles/globals.css'
import { CookiesProvider } from "react-cookie";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
  
        <CookiesProvider>
          <Head>
            <title>Merch</title>
          </Head>

          <Component {...pageProps} />
        </CookiesProvider>
     
    </>
  );
}

export default MyApp
