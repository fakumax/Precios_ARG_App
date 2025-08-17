import React from "react";
import { View, Text, ScrollView, YStack, XStack } from "tamagui";
import Header from "../components/Header";

export default function ProfileScreen() {
	return (
		<YStack flex={1}>
			<Header />

			<ScrollView flex={1} backgroundColor="white" padding="$3">
				<YStack gap="$3" paddingTop={20}>
					<Text fontSize="$4" color="black" textAlign="center">
						Nosotros
					</Text>

					<YStack gap="$2">
						<Text fontSize="$3" color="black" fontWeight="bold">
							Acerca de la App
						</Text>
						<Text fontSize="$2" color="black">
							Precios ARG es una aplicación para consultar precios de productos en diferentes comercios de Argentina.
						</Text>
					</YStack>

					<YStack gap="$2">
						<Text fontSize="$3" color="black" fontWeight="bold">
							Funcionalidades
						</Text>
						<Text fontSize="$2" color="black">
							• Búsqueda de productos por nombre{"\n"}• Escaneo de códigos QR{"\n"}• Lista de favoritos{"\n"}•
							Comparación de precios
						</Text>
					</YStack>

					<YStack gap="$2">
						<Text fontSize="$3" color="black" fontWeight="bold">
							Contacto
						</Text>
						<Text fontSize="$2" color="black">
							Para sugerencias o consultas, puedes contactarnos a través de nuestras redes sociales.
						</Text>
					</YStack>

					{/* Placeholder para información adicional */}
					<View
						backgroundColor="#f0f0f0"
						width="100%"
						height={100}
						borderRadius="$2"
						alignItems="center"
						justifyContent="center"
					>
						<Text fontSize="$sm" color="gray">
							Versión 1.0.0
						</Text>
					</View>
				</YStack>
			</ScrollView>
		</YStack>
	);
}
