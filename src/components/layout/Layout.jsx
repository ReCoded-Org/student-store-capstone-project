import * as React from "react";

import Footer from "./Footer/Footer";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    return (
        <>
            {children} <Footer />{" "}
        </>
    );
}
