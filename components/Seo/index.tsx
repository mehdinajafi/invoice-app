import Head from "next/head";

interface ISeo {
  title: string;
  description?: string;
  favicon?: string;
}

const Seo: React.FC<ISeo> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href={props.favicon} />
    </Head>
  );
};

Seo.defaultProps = {
  title: "Invoice App",
  description: "",
  favicon: "/favicon.ico",
};

export default Seo;
