import React from "react";

import Layout from "@/components/layout/Layout";
import Listings from "@/components/Listings/Listings";
import Sidebar from "@/components/Sidebar/Sidebar";

function ListingsPage() {
    return (
        <Layout>
            <main className='flex xs:flex-col sm:flex-col lg:flex-row md:flex-row'>
                <Sidebar />
                <Listings />
            </main>
        </Layout>
    );
}

export default ListingsPage;
