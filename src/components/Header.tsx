import React from "react";
import { View, Text, Button, Input, XStack } from "tamagui";

export default function Header() {
	return (
		<View backgroundColor="#e74c3c" paddingHorizontal="$3" paddingVertical="$2" paddingTop={50}>
			<XStack alignItems="center" gap="$2">
				<Button backgroundColor="#c0392b" color="white" height={40} fontSize="$2" flex={0}>
					Filtro
				</Button>

				<Input
					placeholder="Búsqueda de producto por nombre"
					backgroundColor="white"
					flex={1}
					height={40}
					fontSize="$2"
				/>

				<Button backgroundColor="#c0392b" color="white" height={40} fontSize="$2" flex={0}>
					Buscar
				</Button>

				<Button backgroundColor="#c0392b" color="white" height={40} fontSize="$2" flex={0}>
					QR
				</Button>
			</XStack>
		</View>
	);
}
