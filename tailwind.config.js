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
                hadrisblue: "#21567E",
                darkpurple: "#32314D",
                pumpkin: "#FF8A57",
                cyanaqua: "#90EEE1",
                iceblue: "#565584",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
