const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['"Poppins"', "serif"],
            },
            colors: {
                purple: "#7874F2",
                lightpurple: "#7874F2",
                darkpurple: "#32314D",
                pumpkin: "#FF8A57",
                cyanaqua: "#90EEE1",
                iceblue: "#F1F6FA",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
