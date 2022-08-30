import { AuthContextProvider } from "context/AuthContext";
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

            <AuthContextProvider>
                <Component {...pageProps} />
            </AuthContextProvider>
        </>
    );
}

export default appWithTranslation(MyApp);
