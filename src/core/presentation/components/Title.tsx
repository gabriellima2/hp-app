import { Text, TextProps, StyleSheet } from "react-native";
import { themes } from "@/shared/styles/themes";

export const Title = (props: TextProps) => (
	<Text style={[styles.title, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
	title: {
		color: themes.fontColor,
		fontWeight: "700",
		fontSize: 20,
	},
});
