// import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Carousel from "@/components/carousel";
import CategoryPriceFilter from "@/components/categoryPriceFilter/CategoryPriceFilter";
import Layout from "@/components/layout/Layout";
import ListOfProducts from "@/components/ListOfProducts";

import PRODUCTS from "../components/ListOfProducts/data";

export default function HomePage() {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [products, setProducts] = React.useState(PRODUCTS);
    const [filteredProducts, setfilteredProducts] = React.useState(products);
    return (
        <>
            <Layout
                products={products}
                filteredProducts={filteredProducts}
                setfilteredProducts={setfilteredProducts}
            >
                <div className='bg-clay md:px-10 lg:px-16 2xl:px-20'>
                    <Carousel />
                    <CategoryPriceFilter
                        products={products}
                        filteredProducts={filteredProducts}
                        setfilteredProducts={setfilteredProducts}
                    />
                    <ListOfProducts filteredProducts={filteredProducts} />
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "footer",
                "category-price-filter",
                "categories",
            ])),
            // Will be passed to the page component as props
        },
    };
}
