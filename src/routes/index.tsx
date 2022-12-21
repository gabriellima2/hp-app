import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { CharactersRoutes } from "../modules/characters/routes";

const Tab = createBottomTabNavigator();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="HomeScreen" component={CharactersRoutes} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
