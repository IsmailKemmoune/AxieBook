import "../styles/globals.css";
import { Provider } from 'jotai'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Provider>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp;
