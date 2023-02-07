module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
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
    "rules": {
        // "no-trailing-spaces": ["error", { "skipBlankLines": true } ],
        "no-return-assign": 0,
        "eol-last": 0,
        "semi": 0,
        "camelcase": 0,
        "object-curly-spacing": 0,
        "comma-dangle": 0
    }
}