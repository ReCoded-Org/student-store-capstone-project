/* eslint-disable unused-imports/no-unused-vars */
//import Link from "next/link";
import { auth } from "firebase.config";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
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
    const router = useRouter();

    const { userName, setUserName } = React.useState("Your Name");

    const updateInfo = () => {
        const name = document.getElementById("userName").value;
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
                "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
        })
            .then(() => {
                toast.success(t("changes-saved") + "!");
                location.reload();
            })
            .catch(() => {});
    };

    return (
        <div className='mt-4 flex flex-wrap justify-center self-center'>
            <div className='w-3/4'>
                <input
                    className=' inputtabfont my-3.5 block w-full rounded-lg
                 border border-gray-300 bg-gray-50 p-2.5 
                 text-center text-xl text-hadrisblue
                  placeholder-hadrisblue focus:border-blue-500 focus:ring-purple'
                    value={userName}
                    id='userName'
                    name='name'
                    type='text'
                    placeholder={t("name")}
                    required
                />
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
                        handleClick={updateInfo}
                    />
                </a>
                <ToastContainer />
            </div>
        </div>
    );
}
