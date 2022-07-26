import * as React from "react";

import Header from "../header/Header";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    return (
        <>
            <Header />

            {children}
        </>
    );
}
