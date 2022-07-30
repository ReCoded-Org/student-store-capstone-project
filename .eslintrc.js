module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        "jest/globals": true,
    },
    plugins: ["simple-import-sort", "unused-imports", "jest"],
    extends: ["eslint:recommended", "next", "next/core-web-vitals", "prettier"],
    rules: {
        "jest/consistent-test-it": "off",
        "no-unused-vars": "off",
        "no-console": "warn",
        "react/display-name": "off",
        "react/jsx-curly-brace-presence": [
            "warn",
            { props: "never", children: "never" },
        ],
        //#region  //*=========== Unused Import ===========
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        //#endregion  //*======== Unused Import ===========

        //#region  //*=========== Import Sort ===========
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    // ext library & side effect imports
                    ["^@?\\w", "^\\u0000"],
                    // {s}css files
                    ["^.+\\.s?css$"],
                    // Lib and hooks
                    ["^@/lib", "^@/hooks"],
                    // static data
                    ["^@/data"],
                    // components
                    ["^@/components", "^@/container"],
                    // zustand store
                    ["^@/store"],
                    // Other imports
                    ["^@/"],
                    // relative paths up until 3 level
                    [
                        "^\\./?$",
                        "^\\.(?!/?$)",
                        "^\\.\\./?$",
                        "^\\.\\.(?!/?$)",
                        "^\\.\\./\\.\\./?$",
                        "^\\.\\./\\.\\.(?!/?$)",
                        "^\\.\\./\\.\\./\\.\\./?$",
                        "^\\.\\./\\.\\./\\.\\.(?!/?$)",
                    ],
                    // other that didnt fit in
                    ["^"],
                ],
            },
        ],
        //#endregion  //*======== Import Sort ===========
    },
    globals: {
        React: true,
        JSX: true,
    },
};
