import { TamaguiProvider } from "tamagui";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { config } from "../tamagui.config";

export default function RootLayout() {
	return (
		<TamaguiProvider config={config} defaultTheme="light">
			<StatusBar style="auto" />
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</TamaguiProvider>
	);
}
