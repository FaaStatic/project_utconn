import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { DeprecatedUi, Primitives, ThemeProvider } from "@untr/core-components";
import { useStandalone } from "@untr/core-hooks";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { ToastProvider } = DeprecatedUi;
const { PortalHost } = Primitives;

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
	const { set } = useStandalone();

	useEffect(() => {
		set(true);
	}, [set]);

	return (
		<ThemeProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<BottomSheetModalProvider>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen
							name="(tabs)"
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="+not-found"
							options={{
								headerShown: false,
							}}
						/>
					</Stack>
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
			<PortalHost />
			<ToastProvider />
		</ThemeProvider>
	);
}
