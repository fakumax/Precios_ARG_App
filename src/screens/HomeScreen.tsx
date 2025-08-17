import React from "react";
import { View, Text, ScrollView, XStack, YStack } from "tamagui";
import Header from "../components/Header";

export default function HomeScreen() {
	return (
		<YStack flex={1}>
			<Header />

			<ScrollView flex={1} backgroundColor="white" padding="$3">
				<YStack gap="$3">
					{/* Grid de productos */}
					<XStack gap="$3">
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
					</XStack>

					<XStack gap="$3">
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
					</XStack>

					<XStack gap="$3">
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
					</XStack>

					<XStack gap="$3">
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
						<View backgroundColor="#d3d3d3" width="45%" height={120} borderRadius="$2" />
					</XStack>
				</YStack>
			</ScrollView>
		</YStack>
	);
}
