import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "stitches-config";

const InitTheme = () => {
  const codeToRunOnClient = `
  !function(){try{var a=document.documentElement,b=a.classList;b.remove("light","dark");var c=JSON.parse(localStorage.getItem("persist:root"));b.add(JSON.parse(c.theme).value||""),a.style.colorScheme=JSON.parse(c.theme).theme.value}catch(d){}}()
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <InitTheme />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
