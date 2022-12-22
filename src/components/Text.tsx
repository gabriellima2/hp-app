import { StyleSheet, Text as RNText, TextProps } from "react-native";
import { themes } from "../styles/themes";

const Bold = (props: TextProps) => (
	<RNText {...props} style={[styles.bold, props.style]} />
);

const Medium = (props: TextProps) => (
	<RNText {...props} style={[styles.medium, props.style]} />
);

const Regular = (props: TextProps) => (
	<RNText {...props} style={[styles.regular, props.style]} />
);

const Light = (props: TextProps) => (
	<RNText {...props} style={[styles.light, props.style]} />
);

const styles = StyleSheet.create({
	bold: {
		fontFamily: "Roboto_700Bold",
		color: themes.fontColor,
	},
	medium: {
		fontFamily: "Roboto_500Medium",
		color: themes.fontColor,
	},
	regular: {
		fontFamily: "Roboto_400Regular",
		color: themes.fontColor,
	},
	light: {
		fontFamily: "Roboto_300Light",
		color: themes.fontColor,
	},
});

export const Text = { Bold, Medium, Regular, Light };
