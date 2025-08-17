import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";

// Extend default v4 config with alias tokens used in the app ($sm/$md/$lg)
export const config = createTamagui({
	...defaultConfig,
	tokens: {
		...defaultConfig.tokens,
		size: {
			...defaultConfig.tokens.size,
			$sm: 12,
			$md: 16,
			$lg: 20,
		},
		space: {
			...defaultConfig.tokens.space,
			$sm: 8,
			$md: 16,
			$lg: 24,
		},
		radius: {
			...defaultConfig.tokens.radius,
			$sm: 6,
			$md: 10,
			$lg: 14,
		},
	},
	settings: {
		...defaultConfig.settings,
		// Recommended for RN parity per v4 docs
		styleCompat: "react-native",
	},
});

type CustomConfig = typeof config;

declare module "tamagui" {
	interface TamaguiCustomConfig extends CustomConfig {}
}
