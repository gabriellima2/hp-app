import { StatusBar } from "expo-status-bar";
import {
	useFonts,
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({
		RobotoLight: Roboto_300Light,
		RobotoRegular: Roboto_400Regular,
		RobotoMedium: Roboto_500Medium,
		RobotoBold: Roboto_700Bold,
	});

	if (!fontsLoaded) return <Loading />;

	return (
		<>
			<Routes />
			<StatusBar style="auto" />
		</>
	);
}
