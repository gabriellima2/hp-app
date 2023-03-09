import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { useNavigation } from "../../../../hooks/useNavigation";

import { Paragraph } from "../Paragraph";
import type { StackNames, StackParams } from "@/@types/StackParams";

interface LinkProps
	extends Omit<TouchableOpacityProps, "onPress" | "accessibilityRole"> {
	to: {
		name: StackNames;
		params?: StackParams[StackNames] extends undefined
			? undefined
			: Partial<StackParams[StackNames]>;
	};
}

export const Link = (props: LinkProps) => {
	const { children, to, ...rest } = props;
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			{...rest}
			// TODO: Fix types
			onPress={() =>
				to.params
					? navigate(to.name as any, to.params as any)
					: navigate(to.name as any)
			}
			accessibilityRole="link"
		>
			<Paragraph>{children}</Paragraph>
		</TouchableOpacity>
	);
};
