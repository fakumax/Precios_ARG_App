import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TamaguiProvider, View, Text } from "tamagui";
import { config } from "../tamagui.config";

export default function App() {
	return (
		<TamaguiProvider config={config} defaultTheme="light">
			<NavigationContainer>
				<View 
					flex={1} 
					justifyContent="center" 
					alignItems="center"
					backgroundColor="$bg"
				>
					<Text 
						fontSize="$lg" 
						color="$color"
						fontWeight="bold"
					>
						¡Hola desde Tamagui!
					</Text>
					<Text 
						fontSize="$md" 
						color="$color"
						marginTop="$sm"
					>
						Este es tu texto de prueba
					</Text>
				</View>
			</NavigationContainer>
		</TamaguiProvider>
	);
}
