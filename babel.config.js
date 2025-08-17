module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"@tamagui/babel-plugin",
				{
					components: ["tamagui"],
					config: "./tamagui.config.ts",
					logTimings: true,
					disableExtraction: process.env.NODE_ENV === "development",
				},
			],
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
					alias: {
						"@components": "./src/components",
						"@assets": "./src/assets",
						"@hooks": "./src/hooks",
						"@constants": "./src/constants",
						"@layouts": "./src/layouts",
						"@navigation": "./src/navigation",
						"@screens": "./src/screens",
						"@styles": "./src/styles",
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
