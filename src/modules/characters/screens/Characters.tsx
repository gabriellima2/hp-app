import { StyleSheet, View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { Cards } from "../components/Cards";
import { Text } from "../../../components/Text";

import { AppLayout } from "../../../layouts/AppLayout";

import type { StackQuery } from "../@types/StackQuery";

interface CharactersProps extends StackScreenProps<StackQuery, "Characters"> {}

export const Characters = (props: CharactersProps) => {
	const house = props.route.params.houseName;

	return (
		<AppLayout hasHorizontalSpacing>
			<View style={styles.container}>
				<Text.Bold style={styles.title}>Personagens de {house}</Text.Bold>
				<Cards house={house} />
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 12,
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		marginBottom: 20,
	},
});
