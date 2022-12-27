import { StyleSheet, View } from "react-native";
import { Item } from "./components";

const houses = [
	{ name: "Gryffindor" },
	{ name: "Ravenclaw" },
	{ name: "Hufflepuff" },
	{ name: "Slytherin" },
];

export const Houses = () => {
	return (
		<View style={styles.container}>
			{houses.map((house, i) => (
				<Item {...house} key={i} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
});
