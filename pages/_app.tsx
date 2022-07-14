import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import RootLayout from "@/components/layouts/Root";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import { globalStyles } from "stitches-config";

function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles();

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
