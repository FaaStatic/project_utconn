import { Button, H1, Text, cn } from "@untr/core-components";
import { router } from "expo-router";
import type { ComponentProps } from "react";
import { FlatList, View } from "react-native";

const menu = [
	{ label: "DCA", href: "/(dca)/dashboard" },
	{ label: "Lite Module", href: "/(lite-module)/dashboard" },
	{ label: "Coip Mobile", href: "/(mobile-coip)" },
];

export function MaintenanceManagement({
	className,
}: ComponentProps<typeof View>) {
	return (
		<View>
			<View className={cn("bg-[#FFD500] px-6 p-10", className)}>
				<H1 className="text-2xl">Maintenance{"\n"}Management</H1>
			</View>
			<FlatList
				data={menu}
				keyExtractor={(item) => item.href}
				renderItem={({ item }) => (
					<Button
						className="border rounded-xl p-4"
						onPress={() => router.push(item.href)}
					>
						<Text>{item.label}</Text>
					</Button>
				)}
				numColumns={3}
			/>
		</View>
	);
}
