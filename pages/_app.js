import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cristian Florez - CV 🚀</title>
        <meta
          name="description"
          content="Desarrollador frontend y quiero enseñarte todo lo que he aprendido en mis estudios, haciendo una gran combinación entre la mecatrónica y el desarrollo web. ¿Qué te parece un proyecto en NextJS más Arduino"
        />
        <meta 
        name="keywords"
        content="react, nextjs, ccs, redux, ingeneria, feanware, mecatronica, barranquilla"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
