import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Paragraph } from "../Paragraph";

interface LinkProps
	extends Omit<TouchableOpacityProps, "onPress" | "accessibilityRole"> {
	to: {
		name: string;
		options?: object;
	};
}

export const Link = (props: LinkProps) => {
	const { children, to, ...rest } = props;
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			{...rest}
			onPress={() =>
				to.options ? navigate(to.name, to.options) : navigate(to.name)
			}
			accessibilityRole="link"
		>
			<Paragraph>{children}</Paragraph>
		</TouchableOpacity>
	);
};
