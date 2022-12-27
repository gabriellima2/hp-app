import { createStackNavigator } from "@react-navigation/stack";

import { Characters } from "../screens/Characters";
import { Details } from "../screens/Details";
import { Home } from "../screens/Home";

const Stack = createStackNavigator();

export const CharactersStack = () => (
	<Stack.Navigator
		initialRouteName="Home"
		screenOptions={{ headerShown: false }}
	>
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Details" component={Details} />
		<Stack.Screen name="Characters" component={Characters} />
	</Stack.Navigator>
);
