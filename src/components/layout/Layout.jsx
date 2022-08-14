import * as React from "react";

import Footer from "./Footer/Footer";
import Header from "../header/Header";

export default function Layout({
    children,
    products,
    filteredProducts,
    setfilteredProducts,
    productName,
    setProductName,
}) {
    return (
        <>
            <Header
                products={products}
                filteredProducts={filteredProducts}
                setfilteredProducts={setfilteredProducts}
                productName={productName}
                setProductName={setProductName}
            />{" "}
            {children} <Footer />
        </>
    );
}
