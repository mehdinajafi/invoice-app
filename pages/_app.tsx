import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import RootLayout from "layouts/Root";
import { Provider } from "react-redux";
import { store } from "store";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
