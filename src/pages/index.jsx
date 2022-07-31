import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Carousel from "@/components/carousel";
import Category_price_filter from "@/components/category-price-filter/category_price_filter";
import Layout from "@/components/layout/Layout";
import ListOfProducts from "@/components/ListOfProducts";

export default function HomePage() {
    // const { t } = useTranslation("common");

    return (
        <>
            <Layout>
                {/* <p>{t("test")}</p>
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
                    <Link href='/' locale='ar'>
                        <a>Arabic</a>
                    </Link>
                    <Link href='/' locale='tr'>
                        <a>Turkish</a>
                    </Link>
                </div> */}
                <Carousel />
                <Category_price_filter />
                <ListOfProducts />
            </Layout>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
