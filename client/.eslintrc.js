module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":  true
    },
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "airbnb"
    ],
    "overrides": [
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
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "quotes": [
            "error", 
            "double"
        ],
        "jsx-quotes": [
            "error", 
            "prefer-double"
        ],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "rlinebreak-style": "off",
        "indent": "off",
        "arrow-body-style": "off",
        "no-return-assign": 0,
        "eol-last": 0,
        "semi": 0,
        "camelcase": 0,
        "object-curly-spacing": 0,
        "comma-dangle": 0,
        "react/react-in-jsx-scope": "off",
    }
}
