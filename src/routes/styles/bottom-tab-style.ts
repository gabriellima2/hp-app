import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import type { ParamListBase, RouteProp } from "@react-navigation/native";

import { themes } from "../../styles/themes";

type Options =
	| BottomTabNavigationOptions
	| ((props: {
			route: RouteProp<ParamListBase, string>;
			navigation: any;
	  }) => BottomTabNavigationOptions);

export const bottomTabStyle: Options = ({ route }) => ({
	headerShown: false,
	swipeEnabled: true,
	animationEnabled: true,
	tabBarHideOnKeyboard: true,

	tabBarActiveTintColor: themes.utilColor,
	tabBarInactiveTintColor: themes.fontColor,

	tabBarStyle: {
		height: 55,
		borderTopWidth: 0,
		position: "absolute",
		backgroundColor: themes.backgroundColor,
		paddingBottom: 4,
		paddingTop: 2,
	},
	tabBarLabelStyle: {
		fontSize: 10,
		textTransform: "uppercase",
		fontFamily: "Roboto_500Medium",
	},
});
