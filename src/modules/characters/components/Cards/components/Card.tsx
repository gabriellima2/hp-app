import { Image, StyleSheet, View } from "react-native";

import { ImageNotFound } from "../../../../../components/ImageNotFound";
import { Text } from "../../../../../components/Text";

import type { Character } from "../../../@types/Character";

interface CardProps extends Character {}

export const Card = (props: CardProps) => (
	<View style={styles.container}>
		<View>
			{props.image ? (
				<Image source={{ uri: props.image }} style={styles.image} />
			) : (
				<ImageNotFound style={styles.image} />
			)}
		</View>
		<Text.Medium style={styles.name}>{props.name}</Text.Medium>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginBottom: 24,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 8,
	},
	name: {
		fontSize: 16,
		marginTop: 8,
	},
});
