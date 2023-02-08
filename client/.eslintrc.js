module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [".eslintrc.js"],
    "rules": {
        // "no-trailing-spaces": ["error", { "skipBlankLines": true } ],
        "no-return-assign": 0,
        "eol-last": 0,
        "semi": 0,
        "camelcase": 0,
        "object-curly-spacing": 0,
        "comma-dangle": 0,
        "react/react-in-jsx-scope": "off",
    },
}