import React from "react";

export default function Input({ placeholder, type }) {
    return (
        <>
            <input
                className=' text-md my-3.5 block w-full rounded-lg
                 border border-gray-300 bg-gray-50 p-2.5 text-center
                  text-hadrisblue placeholder-hadrisblue placeholder:text-sm focus:border-blue-500
                   focus:ring-purple'
                id={type}
                type={type}
                placeholder={placeholder}
                required
            />
        </>
    );
}
