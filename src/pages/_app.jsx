import { AuthContextProvider } from "context/AuthContext";
import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />;
        </AuthContextProvider>
    );
}

export default appWithTranslation(MyApp);
