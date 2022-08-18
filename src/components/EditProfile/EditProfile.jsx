//import Link from "next/link";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

import Button from "../button";
import Input from "../input";
if (typeof window !== "undefined") {
    injectStyle();
}

export default function EditProfile() {
    const { t } = useTranslation("profile");

    function notify() {
        toast.success(t("changes-saved") + "!");
    }

    return (
        <div className='mt-4 flex flex-wrap justify-center self-center'>
            <div className='w-3/4'>
                <Input type='text' placeholder={t("name")} />
                <Input type='text' placeholder={t("surname")} />
                <Input type='email' placeholder='email' />
                <Input type='password' placeholder={t("password")} />
                <Input
                    type='password'
                    placeholder={t("confirm-new-password")}
                />
                <div className='flex h-48 items-stretch'>
                    <Input type='text' placeholder={t("address")} />
                </div>
            </div>
            <div className=' flex w-1/2 justify-center'>
                <a>
                    <Button
                        buttonStyle='saveChanges'
                        type='button'
                        text={t("save-changes")}
                        handleClick={notify}
                    />
                </a>
                <ToastContainer />
            </div>
        </div>
    );
}
