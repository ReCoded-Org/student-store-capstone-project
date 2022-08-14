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
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
    currentCategory,
    setCurrentCategory,
}) {
    return (
        <>
            <Header
                products={products}
                filteredProducts={filteredProducts}
                setfilteredProducts={setfilteredProducts}
                productName={productName}
                setProductName={setProductName}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />{" "}
            {children} <Footer />
        </>
    );
}
