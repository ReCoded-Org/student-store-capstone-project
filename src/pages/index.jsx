import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Carousel from "@/components/carousel";
import CategoryPriceFilter from "@/components/categoryPriceFilter/CategoryPriceFilter";
import Layout from "@/components/layout/Layout";
import ListOfProducts from "@/components/ListOfProducts";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <>
            <Layout>
                <p>{t("test")}</p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                    }}
                >
                    <Link href='/' locale='en'>
                        <a>English</a>
                    </Link>
                    <Link href='/' locale='de'>
                        <a>Deutsch</a>
                    </Link>
                    <Link href='/' locale='tr'>
                        <a>Turkish</a>
                    </Link>
                </div>
                <div className='bg-clay md:px-10 lg:px-16 2xl:px-20'>
                    <Carousel />
                    <CategoryPriceFilter />
                    <ListOfProducts />
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
