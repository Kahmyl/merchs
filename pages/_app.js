import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Merch</title>
        </Head>

        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp
