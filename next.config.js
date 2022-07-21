/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const withImages = require("next-images");
module.exports = withImages();

module.exports = {
    i18n,
    eslint: {
        dirs: ["src"],
    },
    plugins: [
        [
            "inline-react-svg",
            {
                svgo: {
                    plugins: [
                        {
                            name: "preset-default",
                            params: {
                                overrides: {
                                    inlineStyles: {
                                        onlyMatchedOnce: false,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        ],
    ],

    reactStrictMode: true,

    // Uncoment to add domain whitelist
    // images: {
    //   domains: [
    //     'res.cloudinary.com',
    //   ],
    // },

    // SVGR
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        typescript: true,
                        icon: true,
                    },
                },
            ],
        });

        return config;
    },
};
