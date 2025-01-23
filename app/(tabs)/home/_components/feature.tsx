import {
	BackgroundIcon,
	EquipmentMonitoringIcon,
	KlikUTIcon,
	MaintenanceManagementIcon,
	MonthlyReportIcon,
	MyTicketIcon,
	OrderTrackingIcon,
} from "@untr/apps-ut-connect/assets/icons";
import { H1, Text } from "@untr/core-components";
import {
	BottomSheet,
	BottomSheetContent,
	BottomSheetOpenTrigger,
	BottomSheetView,
	useBottomSheet,
} from "@untr/core-components/src/components/deprecated-ui";
import type { ComponentProps, ElementType } from "react";
import {
	FlatList,
	Image,
	type ImageSourcePropType,
	Pressable,
	View,
} from "react-native";
import { MaintenanceManagement } from "./maintenance-management";

const data = [
	{
		id: 1,
		label: "Unit Online Inquiry",
		icon: EquipmentMonitoringIcon,
		sheet: MaintenanceManagement,
	},
	{
		id: 2,
		label: "Order Tracking",
		icon: OrderTrackingIcon,
		sheet: MaintenanceManagement,
	},
	{ id: 3, label: "KlikUT", icon: KlikUTIcon },
	{
		id: 4,
		label: "Monthly Report",
		icon: MonthlyReportIcon,
		sheet: MaintenanceManagement,
	},
	{
		id: 5,
		label: "Equipment Monitoring",
		icon: EquipmentMonitoringIcon,
		sheet: MaintenanceManagement,
	},
	{
		id: 6,
		label: "My Ticket",
		icon: MyTicketIcon,
		sheet: MaintenanceManagement,
	},
	{
		id: 7,
		label: "Maintenance Management",
		icon: MaintenanceManagementIcon,
		sheet: MaintenanceManagement,
	},
	{
		id: 8,
		label: "COIP",
		icon: MaintenanceManagementIcon,
		sheet: MaintenanceManagement,
	},
];

type CardFeatureProps = ComponentProps<typeof BottomSheetOpenTrigger> & {
	label: string;
	icon: ImageSourcePropType;
	sheet?: ElementType;
};

const CardFeature = ({ label, icon, sheet: Sheet }: CardFeatureProps) => {
	const { ref: refBottomSheet } = useBottomSheet();

	return (
		<BottomSheet>
			<BottomSheetOpenTrigger asChild>
				<Pressable className="relative flex-[1] items-center justify-center">
					<Image
						source={BackgroundIcon}
						alt="Background Icon"
						className="absolute bottom-0 flex-[1]"
					/>
					<View className="items-center justify-center">
						<Image source={icon} alt={label} className="w-16 h-16" />
						<Text className="text-center mt-2">{label}</Text>
					</View>
				</Pressable>
			</BottomSheetOpenTrigger>
			{Sheet && (
				<BottomSheetContent
					handleComponent={() => <View />}
					ref={refBottomSheet}
				>
					<BottomSheetView hadHeader={false} className="p-0">
						<View className="rounded-t-xl relative">
							<View className="w-10 h-2 rounded-md bg-white m-2 self-center relative z-[10]" />
							<View className="relative -top-[23px] z-0 rounded-t-xl">
								<Sheet className="rounded-t-3xl" />
							</View>
						</View>
					</BottomSheetView>
				</BottomSheetContent>
			)}
		</BottomSheet>
	);
};

export function Feature() {
	return (
		<View className="flex-[1]">
			<H1 className="font-bold text-2xl">Feature UT Connect</H1>
			<FlatList
				className="mt-6"
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<CardFeature label={item.label} icon={item.icon} sheet={item.sheet} />
				)}
				ItemSeparatorComponent={() => <View className="h-6" />}
				numColumns={4}
				contentContainerStyle={{
					justifyContent: "space-between",
				}}
			/>
		</View>
	);
}
