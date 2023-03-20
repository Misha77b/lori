module.exports = {
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	semi: true,
	trailingComma: "all",
	singleQuote: false,
	overrides: [
		{
			files: "**/lwc/**/*.html",
			options: { parser: "lwc" },
		},
		{
			files: "*.{cmp,page,component}",
			options: { parser: "html" },
		},
	],
	// singleAttributePerLine: true,
};
