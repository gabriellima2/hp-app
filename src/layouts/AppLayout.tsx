import { ReactNode } from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Platform,
	NativeModules,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { themes } from "../styles/themes";

interface AppLayoutProps {
	children: ReactNode;
	hasHorizontalSpacing?: boolean;
}

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export const AppLayout = ({
	hasHorizontalSpacing,
	...props
}: AppLayoutProps) => {
	const bottomTabBarHeight = useBottomTabBarHeight();

	return (
		<SafeAreaView style={styles.safe}>
			<View
				style={{
					...styles.container,
					paddingHorizontal: hasHorizontalSpacing ? 8 : 0,
					paddingBottom: bottomTabBarHeight,
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
