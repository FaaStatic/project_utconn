import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feature } from "./_components/feature";

export default function Home() {
	const insets = useSafeAreaInsets();

	return (
		<View className="px-4 h-screen" style={{ paddingTop: insets.top }}>
			<Feature />
		</View>
	);
}
