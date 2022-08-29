import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Carousel from "@/components/carousel";
import CategoryPriceFilter from "@/components/categoryPriceFilter/CategoryPriceFilter";
import Layout from "@/components/layout/Layout";
import ListOfProducts from "@/components/ListOfProducts";

export default function HomePage({ productsData }) {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [products, setProducts] = React.useState(
        productsData.filter(
            (activeProduct) => activeProduct.status === "Active"
        )
    );
    const [filteredProducts, setfilteredProducts] = React.useState(products);
    const [productName, setProductName] = React.useState("");
    const [maxPrice, setMaxPrice] = React.useState("");
    const [minPrice, setMinPrice] = React.useState("");
    const [currentCategory, setCurrentCategory] = React.useState("");

    // const { data: session } = useSession();

    return (
        <>
            <Layout
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
            >
                <div className='bg-clay md:px-10 lg:px-16 2xl:px-20'>
                    <Carousel />
                    <CategoryPriceFilter
                        products={products}
                        filteredProducts={filteredProducts}
                        setfilteredProducts={setfilteredProducts}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                        minPrice={minPrice}
                        setMinPrice={setMinPrice}
                        currentCategory={currentCategory}
                        setCurrentCategory={setCurrentCategory}
                        productName={productName}
                        setProductName={setProductName}
                    />
                    <ListOfProducts filteredProducts={filteredProducts} />
                </div>
            </Layout>
        </>
    );

    // return (
    //     <>
    //         Not signed in <br />
    //         <button onClick={() => signIn()}>Sign in</button>
    //     </>
    // );
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://0.0.0.0:3001";

export async function getStaticProps({ locale }) {
    const res = await fetch(API_URL + "/products");
    const productsData = await res.json();
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "footer",
                "category-price-filter",
                "categories",
            ])),
            productsData,
            // Will be passed to the page component as props
        },
    };
}
