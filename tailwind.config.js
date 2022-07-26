const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['"Poppins"', "serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
