import React from "react";

export default function Input({ placeholder, type }) {
    return (
        <>
            <input
                className=' inputtabfont my-3.5 block w-full rounded-lg
                 border border-gray-300 bg-white p-2.5 text-center
                  text-xl text-hadrisblue placeholder-hadrisblue focus:border-blue-500
                   focus:ring-purple'
                id={type}
                type={type}
                placeholder={placeholder}
                required
            />
        </>
    );
}