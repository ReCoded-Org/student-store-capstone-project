import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import EditProfile from "@/components/EditProfile/EditProfile";
import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function EditProfilePage() {
    return (
        <Layout>
            <main className='flex justify-between bg-iceblue xs:flex-col sm:flex-col md:flex-row lg:flex-row'>
                <Sidebar pageName='edit-profile' />
                <div className='editphone edittab md:w-4/5'>
                    <EditProfile />
                </div>
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
