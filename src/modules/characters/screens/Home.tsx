import { StyleSheet, View } from "react-native";

import { Text } from "../../../components/Text";
import { Houses } from "../components/Houses";

import { AppLayout } from "../../../layouts/AppLayout";

export const Home = () => {
	return (
		<AppLayout hasHorizontalSpacing>
			<View style={styles.container}>
				<Text.Bold style={styles.title}>Selecione a casa</Text.Bold>
				<Houses />
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		marginBottom: 12,
	},
});
