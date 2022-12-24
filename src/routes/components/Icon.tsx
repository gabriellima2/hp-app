import { Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { themes } from "../../styles/themes";

interface IconProps {
	name: string;
	focused: boolean;
}

export const Icon = (props: IconProps) => {
	return (
		<Text>
			<FontAwesome5
				name={props.name}
				color={props.focused ? themes.utilColor : themes.fontColor}
				size={20}
			/>
		</Text>
	);
};
