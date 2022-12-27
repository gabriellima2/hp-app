import { Text } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import type { StackQuery } from "../@types/StackQuery";

interface CharactersProps extends StackScreenProps<StackQuery, "Characters"> {}

export const Characters = (props: CharactersProps) => {
	const house = props.route.params.houseName;

	return <Text>Characters Page to House {house}</Text>;
};
