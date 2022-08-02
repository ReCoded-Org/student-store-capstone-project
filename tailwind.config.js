// const { fontFamily } = require("tailwindcss/defaultTheme");
// const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xxs: "180px",
            xs: "350px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontFamily: {
                Poppins: ['"Poppins"', "serif"],
            },
            // The project custom colors
            colors: {
                hadrisblue: "#21567E",
                white: "#FFFFFF",
                clay: "#F1F6FA",
                cyan: "#90EEE1",
                orange: "#FF8A57",
                purple: "#7874F2",
                darkPurple: "#585785",
                extraDarkPurple: "#32314D",
                black: "#000000",
                yellow: "#ebda41",
                lightpurple: "#7874F2",
                darkpurple: "#32314D",
                pumpkin: "#FF8A57",
                cyanaqua: "#90EEE1",
                iceblue: "#F1F6FA",
            },
            backgroundImage: {
                sunSky: "url('/public/images/sunSky.png')",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    /* Firefox */
                    "scrollbar-width": "none",

                    /* Safari and Chrome */
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        }),
    ],
};
