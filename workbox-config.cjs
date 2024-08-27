module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,html,json,svg,md,jsx,css}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [{
		urlPattern: /./,
		handler: "NetworkFirst",
	}]
};