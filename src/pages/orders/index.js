import React from "react";

import Layout from "@/components/layout/Layout";
import Orders from "@/components/Orders/Orders";
import Sidebar from "@/components/Sidebar/Sidebar";

function OrdersPage() {
    return (
        <Layout>
            <main className='flex xs:flex-col sm:flex-col lg:flex-row md:flex-row'>
                <Sidebar />
                <Orders />
            </main>
        </Layout>
    );
}

export default OrdersPage;
