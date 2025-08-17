import React from "react";
import { View, Text, ScrollView, YStack } from "tamagui";
import Header from "../components/Header";

export default function FavoritesScreen() {
	return (
		<YStack flex={1}>
			<Header />

			<ScrollView flex={1} backgroundColor="white" padding="$3">
				<YStack gap="$3" alignItems="center" paddingTop={20}>
					<Text fontSize="$4" color="black">
						Favoritos
					</Text>
					<Text fontSize="$2" color="black" textAlign="center">
						Aquí verás los productos que hayas marcado como favoritos
					</Text>

					{/* Placeholder para lista de favoritos */}
					<View
						backgroundColor="#f0f0f0"
						width="100%"
						height={200}
						borderRadius="$2"
						alignItems="center"
						justifyContent="center"
					>
						<Text fontSize="$sm" color="gray">
							No hay favoritos aún
						</Text>
					</View>
				</YStack>
			</ScrollView>
		</YStack>
	);
}
