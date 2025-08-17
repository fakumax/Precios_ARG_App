import React from "react";
import { View, Text, ScrollView, YStack } from "tamagui";
import Header from "@components/Header";

export default function ProfileScreen() {
	return (
		<YStack flex={1}>
			<Header />

			<ScrollView flex={1} bg="white" p="$3">
				<YStack gap="$3" pt={20}>
					<Text fontSize="$4" color="black" text="center">
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

					<View bg="#f0f0f0" width="100%" height={100} justify="center">
						<Text fontSize="$2" color="gray">
							Versión 1.0.0
						</Text>
					</View>
				</YStack>
			</ScrollView>
		</YStack>
	);
}
