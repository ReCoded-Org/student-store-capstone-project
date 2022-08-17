import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Layout from "@/components/layout/Layout";
import Orders from "@/components/Orders/Orders";
import Sidebar from "@/components/Sidebar/Sidebar";

function OrdersPage() {
    return (
        <Layout>
            <main className='flex xs:flex-col sm:flex-col md:flex-row lg:flex-row'>
                <Sidebar pageName='orders' />
                <Orders />
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

export default OrdersPage;
