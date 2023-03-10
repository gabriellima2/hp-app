import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MakeHome } from "../core/main/factories/pages/make-home";
import { MakeDetails } from "../core/main/factories/pages/make-details";

import type { StackParams } from "../shared/@types/StackParams";

const Stack = createStackNavigator<StackParams>();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={MakeHome} />
				<Stack.Screen name="Details" component={MakeDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
