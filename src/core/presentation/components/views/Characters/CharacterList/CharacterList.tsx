import { useCallback } from "react";
import {
	Dimensions,
	FlatList,
	ListRenderItemInfo,
	StyleSheet,
} from "react-native";

import { CharacterListItem } from "../CharacterListItem";
import type { CharacterEntity } from "@/core/domain/entities/character-entities";

type CharacterListProps = {
	characters: CharacterEntity[];
};

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

export const CharacterList = (props: CharacterListProps) => {
	const { characters } = props;

	const keyExtractor = useCallback((item: CharacterEntity) => item.id, []);
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<CharacterEntity>) => (
			<CharacterListItem name={item.name} image={item.image} />
		),
		[]
	);

	return (
		<FlatList
			data={characters}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			contentContainerStyle={styles.characters}
		/>
	);
};

const styles = StyleSheet.create({
	characters: {
		paddingBottom:
			Math.abs(windowDimensions.height - screenDimensions.height) + 16,
	},
});
