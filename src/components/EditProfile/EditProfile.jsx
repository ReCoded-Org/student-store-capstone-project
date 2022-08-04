import * as React from "react";

import Button from "../button";
import Input from "../layout/input";

export default function EditProfile() {
    return (
        <div className='flex flex-wrap justify-center  '>
            <div className=' w-3/4 '>
                <Input type='text' placeholder='Name' />
                <Input type='text' placeholder='Surname' />
                <Input
                    type='email'
                    placeholder='Your Collage or University email'
                />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm New Password' />
                <Input type='text' placeholder='Adress' />
            </div>
            <div className=' flex w-1/2 justify-center'>
                <Button
                    buttonStyle='saveChanges'
                    type='button'
                    text='Save Changes'
                />
            </div>
        </div>
    );
}
