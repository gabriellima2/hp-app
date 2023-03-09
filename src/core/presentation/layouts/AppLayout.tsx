import { ReactNode } from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Platform,
	NativeModules,
} from "react-native";
import { themes } from "@/shared/styles/themes";

interface AppLayoutProps {
	children: ReactNode;
	hasHorizontalSpacing?: boolean;
}

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT =
	Platform.OS === "ios" ? 32 : StatusBarManager.HEIGHT + 12;

export const AppLayout = ({
	hasHorizontalSpacing = true,
	...props
}: AppLayoutProps) => {
	return (
		<SafeAreaView style={styles.safe}>
			<View
				style={{
					...styles.container,
					paddingHorizontal: hasHorizontalSpacing ? 12 : 0,
					paddingTop: STATUSBAR_HEIGHT,
				}}
			>
				{props.children}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: themes.backgroundColor,
	},
	container: {
		flex: 1,
		backgroundColor: themes.backgroundColor,
	},
});
