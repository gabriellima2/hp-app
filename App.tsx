import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
	useFonts,
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { QueryClient, QueryClientProvider } from "react-query";

import { Routes } from "./src/routes";

export default function App() {
	const queryClient = new QueryClient();
	const [fontsLoaded] = useFonts({
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});

	if (!fontsLoaded) return <Text>Carregando</Text>;

	return (
		<QueryClientProvider client={queryClient}>
			<StatusBar style="light" />
			<Routes />
		</QueryClientProvider>
	);
}
