import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
	MakeHome,
	MakeCharacters,
	MakeDetails,
} from "../core/main/factories/pages";

import type { StackParams } from "../shared/@types/StackParams";

const Stack = createStackNavigator<StackParams>();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={MakeHome} />
				<Stack.Screen name="Characters" component={MakeCharacters} />
				<Stack.Screen name="Details" component={MakeDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
