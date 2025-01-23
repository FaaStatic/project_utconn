import {
	TabEquipmentIcon,
	TabHomeIcon,
	TabNotificationIcon,
	TabOrderIcon,
	TabOtherIcon,
} from "@untr/apps-ut-connect/assets/icons";
import { TabIcon } from "@untr/core-components";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
	return (
		<Tabs
			initialRouteName="home"
			screenOptions={{
				tabBarActiveTintColor: "#FFD500",
				tabBarInactiveTintColor: "#A8A8A8",
				headerShown: false,
				tabBarStyle: {
					paddingTop: 8,
					height: Platform.OS === "android" ? 50 : 95,
				},
				tabBarLabelStyle: {
					fontSize: 14,
					fontWeight: 500,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon source={TabHomeIcon} active={focused} alt="Icon Home" />
						);
					},
				}}
			/>
			<Tabs.Screen
				name="equipment"
				options={{
					title: "Equipment",
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabEquipmentIcon}
								active={focused}
								alt="Icon Equipment"
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="order"
				options={{
					title: "Order",
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabOrderIcon}
								active={focused}
								className="!w-7 !h-9"
								alt="Icon Order"
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="notification"
				options={{
					title: "Notification",
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabNotificationIcon}
								active={focused}
								className="!w-7 !h-9"
								alt="Icon Notification"
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="other"
				options={{
					title: "Other",
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabOtherIcon}
								active={focused}
								alt="Icon Other"
							/>
						);
					},
				}}
			/>
		</Tabs>
	);
}
