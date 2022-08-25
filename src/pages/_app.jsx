import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Students Store</title>
                <link rel='icon' href='/favicon.png' />
            </Head>
            <Component {...pageProps} />;
        </>
    );
}

export default appWithTranslation(MyApp);
