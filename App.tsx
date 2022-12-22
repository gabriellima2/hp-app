import { StatusBar } from "expo-status-bar";
import {
	useFonts,
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});

	if (!fontsLoaded) return <Loading />;

	return (
		<>
			<StatusBar style="light" />
			<Routes />
		</>
	);
}
