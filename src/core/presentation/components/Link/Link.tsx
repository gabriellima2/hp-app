import {
	StyleProp,
	TextStyle,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

import { useNavigation } from "@/shared/hooks/useNavigation";

import { Paragraph } from "../Paragraph";
import type { StackNames, StackParams } from "@/shared/@types/StackParams";

interface LinkProps
	extends Omit<TouchableOpacityProps, "onPress" | "accessibilityRole"> {
	variants?: "text" | "container";
	to: {
		name: StackNames;
		params?: StackParams[StackNames] extends undefined
			? undefined
			: Partial<StackParams[StackNames]>;
	};
	textStyle?: StyleProp<TextStyle>;
}

export const Link = (props: LinkProps) => {
	const { children, to, textStyle, variants = "text", ...rest } = props;
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			{...rest}
			// TODO: Fix types
			onPress={() =>
				to.params
					? navigate(to.name as any, { ...to.params })
					: navigate(to.name as any)
			}
			accessibilityRole="link"
			activeOpacity={0.8}
		>
			{variants === "text" && (
				<Paragraph style={textStyle}>{children}</Paragraph>
			)}
			{variants === "container" && <>{children}</>}
		</TouchableOpacity>
	);
};
