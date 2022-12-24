import { Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface IconProps {
	name: string;
	color: string;
}

export const Icon = (props: IconProps) => {
	return (
		<Text>
			<FontAwesome5 {...props} size={20} />
		</Text>
	);
};
