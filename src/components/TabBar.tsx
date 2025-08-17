import React from "react";
import { XStack, Button } from "tamagui";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	return (
		<XStack backgroundColor="#e74c3c" padding="$2" justifyContent="space-around" height={60}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label = options.title !== undefined ? options.title : route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<Button
						key={route.key}
						onPress={onPress}
						backgroundColor={isFocused ? "white" : "transparent"}
						color={isFocused ? "#e74c3c" : "white"}
						borderColor="transparent"
						flex={1}
						fontSize="$2"
					>
						{label}
					</Button>
				);
			})}
		</XStack>
	);
}
