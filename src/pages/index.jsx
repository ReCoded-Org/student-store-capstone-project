import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Carousel from "@/components/carousel";
import CategoryPriceFilter from "@/components/categoryPriceFilter/CategoryPriceFilter";
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
                <div className='bg-clay md:px-10 lg:px-16'>
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
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
