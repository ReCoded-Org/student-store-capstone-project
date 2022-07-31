import React from "react";

export default function Input({ placeholder, type }) {
    return (
        <>
            <input
                className=' my-3.5 block w-full rounded-lg border
                 border-gray-300 bg-gray-50 p-2.5 text-center text-xl
                  text-hadrisblue placeholder-hadrisblue focus:border-blue-500
                   focus:ring-purple dark:border-gray-600 dark:bg-gray-700 dark:text-white
                    dark:focus:border-blue-500 dark:focus:ring-blue-500'
                id={type}
                type={type}
                placeholder={placeholder}
                required
            />
        </>
    );
}
