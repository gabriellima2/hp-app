import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Icon } from "./components/Icon";
import { CharactersRoutes } from "../modules/characters/routes";

import { bottomTabStyle } from "./styles/bottom-tab-style";
import { themes } from "../styles/themes";

const Tab = createBottomTabNavigator();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={bottomTabStyle}>
				<Tab.Screen
					name="Characters"
					component={CharactersRoutes}
					options={{
						title: "Personagens",
						tabBarIcon: ({ focused }) => (
							<Icon
								name="users"
								color={focused ? themes.utilColor : themes.fontColor}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Houses"
					component={CharactersRoutes}
					options={{
						title: "Casas",
						tabBarIcon: ({ focused }) => (
							<Icon
								name="hat-wizard"
								color={focused ? themes.utilColor : themes.fontColor}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};
