import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CharactersRoutes } from "../modules/characters/routes";

const Stack = createStackNavigator();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="home"
					component={CharactersRoutes}
					options={{
						title: "Personagens",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
