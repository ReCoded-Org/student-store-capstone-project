import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import styles from "../styles/headers.module.css";

import Filter from "@/components/filter";
import catergories from "@/components/filter/categories";
import Layout from "@/components/layout/Layout";
import PriceFilter from "@/components/price-filter";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    <a>English</a>
                </Link>
                <Link href='/' locale='ar'>
                    <a>Arabic</a>
                </Link>
                <Link href='/' locale='tr'>
                    <a>Turkish</a>
                </Link>
            </div>
            <div className='px-[15px] py-5'>
                <div className='invisible mx-5 my-2 grid gap-5 text-xl font-bold text-purple lg:visible lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <h1 className={styles.brush}>Categories</h1>
                    </div>
                    <div>
                        <h1 className={styles.brush}>Price</h1>
                    </div>
                </div>
                <div className='grid rounded-full bg-clay xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div className='col-span-2 row-auto my-3 flex items-center justify-center xs:gap-1 md:gap-8'>
                        {catergories.map((catergory, i) => (
                            <Filter
                                key={catergory[i].id}
                                bgColor={catergory[i].color}
                                svg={catergory[i].svg}
                                name={catergory[i].name}
                            />
                        ))}
                    </div>
                    <div className='my-3 flex items-center justify-center'>
                        <PriceFilter />
                    </div>
                </div>
            </div>
        </Layout>
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
