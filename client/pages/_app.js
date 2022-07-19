import "../styles/globals.css";
import { Provider } from 'jotai'
import React from "react";

if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Provider>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp;
