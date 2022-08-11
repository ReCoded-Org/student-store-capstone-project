import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Layout from "@/components/layout/Layout";
import Listings from "@/components/Listings/Listings";
import Sidebar from "@/components/Sidebar/Sidebar";

function ListingsPage() {
    return (
        <Layout>
            <main className='flex xs:flex-col sm:flex-col md:flex-row lg:flex-row'>
                <Sidebar pageName='listings' />
                <Listings />
            </main>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "footer",
                "profile",
            ])),
            // Will be passed to the page component as props
        },
    };
}

export default ListingsPage;
