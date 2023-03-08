import { Text, TextProps, StyleSheet } from "react-native";
import { themes } from "@/styles/themes";

export const Paragraph = (props: TextProps) => (
	<Text style={[styles.paragraph, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
	paragraph: {
		color: themes.fontColor,
		fontWeight: "400",
		opacity: 0.8,
		fontSize: 14,
	},
});
