import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";

interface LinkProps
	extends Pick<
		TouchableOpacityProps,
		| "accessibilityLabel"
		| "accessibilityHint"
		| "children"
		| "style"
		| "onPress"
	> {}

export const Link = (props: LinkProps) => {
	return (
		<TouchableOpacity accessibilityRole="link" activeOpacity={0.4} {...props}>
			<Text.Regular>{props.children}</Text.Regular>
		</TouchableOpacity>
	);
};
