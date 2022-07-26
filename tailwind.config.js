const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "200px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
            },

            // The project custom colors
            colors: {
                white: "#FFFFFF",
                clay: "#F1F6FA",
                cyan: "#90EEE1",
                orange: "#FF8A57",
                purple: "#7874F2",
                darkPurple: "#585785",
                extraDarkPurple: "#32314D",
                black: "#000000",
                yellow: "#ebda41",
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
