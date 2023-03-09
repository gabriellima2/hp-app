import { StyleSheet, View } from "react-native";

import { Title, HousesList } from "@/core/presentation/components";
import { AppLayout } from "@/core/presentation/layouts";

export const Home = () => {
	return (
		<AppLayout>
			<View style={styles.container}>
				<Title style={styles.title}>
					Explore os personagens de Harry Potter
				</Title>
				<HousesList />
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		width: 300,
		fontSize: 24,
		marginBottom: 16,
	},
});
