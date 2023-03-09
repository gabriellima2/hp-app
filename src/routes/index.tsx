import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MakeHome } from "../core/main/factories/pages/make-home";
import type { StackParams } from "../@types/StackParams";

const Stack = createStackNavigator<StackParams>();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="Home"
					component={MakeHome}
					options={{
						title: "Home",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
