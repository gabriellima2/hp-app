import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MakeHome } from "../core/main/factories/pages/make-home";

const Stack = createStackNavigator();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="home"
					component={MakeHome}
					options={{
						title: "Home",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
