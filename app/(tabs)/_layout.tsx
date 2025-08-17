import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@components/navigation/TabBarIcon";
import { Colors } from "@constants/Colors";
import { useColorScheme } from "@hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#e74c3c", // Color rojo para tabs activos
				tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
				tabBarStyle: {
					backgroundColor: "#e74c3c", // Fondo rojo como en tu mockup
				},
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Inicio",
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "home" : "home-outline"} color="white" />,
				}}
			/>
			<Tabs.Screen
				name="favorites"
				options={{
					title: "Favoritos",
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "heart" : "heart-outline"} color="white" />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Nosotros",
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "people" : "people-outline"} color="white" />,
				}}
			/>
		</Tabs>
	);
}
