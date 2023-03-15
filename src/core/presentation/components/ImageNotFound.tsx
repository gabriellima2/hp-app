import { View, ViewProps, StyleSheet } from "react-native";

import { Paragraph } from "./Paragraph";
import { themes } from "@/shared/styles/themes";

export const ImageNotFound = (props: ViewProps) => {
	const { style, ...rest } = props;
	return (
		<View {...rest} style={[styles.imageNotFound, style]}>
			<Paragraph>?</Paragraph>
		</View>
	);
};

const styles = StyleSheet.create({
	imageNotFound: {
		width: 100,
		height: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 1000,
		backgroundColor: themes.utilColor,
	},
});
