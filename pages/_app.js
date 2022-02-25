import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store';
import { CookiesProvider } from "react-cookie";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <CookiesProvider>
          <Head>
            <title>Merch</title>
          </Head>

          <Component {...pageProps} />
        </CookiesProvider>
      </Provider>
    </>
  );
}

export default MyApp
