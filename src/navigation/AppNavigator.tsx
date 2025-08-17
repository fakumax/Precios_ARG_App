import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "tamagui";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
				}}
				tabBar={(props) => <TabBar {...props} />}
			>
				<Tab.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
				<Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: "Favoritos" }} />
				<Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Nosotros" }} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
