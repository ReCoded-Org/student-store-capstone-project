import React from "react";

import EditProfile from "@/components/EditProfile/EditProfile";
import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function EditProfilePage() {
    return (
        <Layout>
            <main className='flex justify-between bg-iceblue xs:flex-col sm:flex-col md:flex-row lg:flex-row'>
                <Sidebar />
                <div className='editphone edittab editdesktop w-4/5'>
                    <EditProfile />
                </div>
            </main>
        </Layout>
    );
}
