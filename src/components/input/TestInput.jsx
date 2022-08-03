import React from "react";

import Input from "./Input";

export default function TestInput() {
    return (
        <div>
            <Input type='text' placeholder='Name' />
            <Input type='text' placeholder='Surname' />
            <Input type='email' placeholder='Email address' />
            <Input type='text' placeholder='School or university name' />
            <Input type='password' placeholder='Password' />
            <Input type='password' placeholder='Confirm Password' />

            <div className='mb-6 flex justify-center align-middle'>
                <div className='flex h-5 items-center'>
                    <input
                        id='remember'
                        type='checkbox'
                        value=''
                        className='focus:ring-3 h-5 w-5 rounded border border-gray-500 bg-gray-50 align-middle
         focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700
          dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                        required
                    />
                </div>
                <label
                    htmlFor='remember'
                    className='ml-2 align-middle text-lg  font-medium leading-4
                        text-hadrisblue dark:text-gray-400'
                >
                    I agree with the
                    <a
                        href='#'
                        className='ml-1 text-purple hover:underline dark:text-blue-500'
                    >
                        Terms and Conditions
                    </a>
                    .
                </label>
            </div>
        </div>
    );
}
