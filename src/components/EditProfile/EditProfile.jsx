import Link from "next/link";
import { useTranslation } from "next-i18next";
import * as React from "react";

import Button from "../button";
import Input from "../input";

export default function EditProfile() {
    const { t } = useTranslation("profile");
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
                <Link href='/'>
                    <a>
                        <Button
                            buttonStyle='saveChanges'
                            type='button'
                            text={t("save-changes")}
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
}
