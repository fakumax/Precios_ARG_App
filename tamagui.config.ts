import { createTamagui } from "tamagui";

export const config = createTamagui({
	tokens: {
		size: {
			true: 1,
			0: 0,
			sm: 8,
			md: 12,
			lg: 20,
		},
		space: {
			true: 1,
			0: 0,
			sm: 4,
			md: 8,
			lg: 12,
		},
		radius: {
			true: 0,
			0: 0,
			none: 0,
			sm: 3,
		},
		zIndex: {
			0: 0,
			1: 100,
			2: 200,
		},
		color: { white: "#fff", black: "#000" },
	},
	themes: {
		light: {
			bg: "#f2f2f2",
			color: "#fff",
		},
		dark: {
			bg: "#111",
			color: "#000",
		},
		dark_blue: {
			bg: "darkblue",
			color: "#fff",
		},
	},
	media: {
		sm: { maxWidth: 860 },
		gtSm: { minWidth: 861 },
		short: { maxHeight: 820 },
		hoverNone: { hover: "none" },
		pointerCoarse: { pointer: "coarse" },
	},
	shorthands: {
		px: "paddingHorizontal",
	},
	settings: {
		disableSSR: true,
		allowedStyleValues: "somewhat-strict-web",
	},
});

type OurConfig = typeof config;

declare module "tamagui" {
	interface TamaguiCustomConfig extends OurConfig {}
}
