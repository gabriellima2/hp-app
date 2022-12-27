import { StyleSheet, View, ViewProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ImageNotFoundProps extends Pick<ViewProps, "style"> {}

export const ImageNotFound = ({ style }: ImageNotFoundProps) => (
	<View style={[styles.container, style]}>
		<Ionicons name="ios-image-sharp" size={32} color="#ffffff4a" />
	</View>
);

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "#ffffff1a",
	},
});
