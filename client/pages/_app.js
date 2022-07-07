import "../styles/globals.css";
import { Provider } from 'react-redux';
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp;
