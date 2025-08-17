import React from "react";
import { View, Text, ScrollView, YStack } from "tamagui";
import Header from "@components/Header";

export default function FavoritesScreen() {
	return (
		<YStack flex={1}>
			<Header />

			<ScrollView flex={1} bg="white" p="$3">
				<YStack gap="$3" pt={20}>
					<Text fontSize="$4" color="black">
						Favoritos
					</Text>
					<Text fontSize="$2" color="black">
						Aquí verás los productos que hayas marcado como favoritos
					</Text>

					{/* Placeholder para lista de favoritos */}
					<YStack bg="#f0f0f0" width="100%" height={200} justify="center">
						<Text fontSize="$2" color="gray">
							No hay favoritos aún pachi
						</Text>
					</YStack>
				</YStack>
			</ScrollView>
		</YStack>
	);
}
