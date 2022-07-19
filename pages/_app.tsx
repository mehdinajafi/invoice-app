import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootLayout from "@/components/layouts/Root";
import { persistor, store } from "@/store/index";
import { globalStyles } from "stitches-config";

function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootLayout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </RootLayout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
