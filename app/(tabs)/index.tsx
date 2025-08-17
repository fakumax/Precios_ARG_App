import React from "react";
import { View, Text, ScrollView, XStack, YStack } from "tamagui";
import Header from "@components/Header";

export default function HomeScreen() {
	return (
		<YStack flex={1}>
			<Header />

			<ScrollView flex={1} bg="white" p="$3">
				<YStack gap="$3">
					{/* Grid de productos */}
					<XStack gap="$3">
						<View bg="#d3d3d3" width="45%" height={120} />
						<View bg="#d3d3d3" width="45%" height={120} />
					</XStack>

					<XStack gap="$3">
						<View bg="#d3d3d3" width="45%" height={120} />
						<View bg="#d3d3d3" width="45%" height={120} />
					</XStack>

					<XStack gap="$3">
						<View bg="#d3d3d3" width="45%" height={120} />
						<View bg="#d3d3d3" width="45%" height={120} />
					</XStack>

					<XStack gap="$3">
						<View bg="#d3d3d3" width="45%" height={120} />
						<View bg="#d3d3d3" width="45%" height={120} />
					</XStack>
				</YStack>
			</ScrollView>
		</YStack>
	);
}
