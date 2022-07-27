const { fontFamily } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "350px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                Poppins: ['"Poppins"', "serif"],
            },
            colors: {
                purple: "#585785",
                lightpurple: "#7874F2",
                darkpurple: "#32314D",
                pumpkin: "#FF8A57",
                cyanaqua: "#90EEE1",
                iceblue: "#565584",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
