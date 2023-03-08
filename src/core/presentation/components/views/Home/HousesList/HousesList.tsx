import { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { Link } from "../../../Link";
import { houses } from "../../../../../utils/houses";

export const HousesList = () => {
	const keyExtractor = useCallback((item: string) => item, []);
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<string>) => (
			<Link
				to={{ name: "Details", options: { house: item.toLowerCase() } }}
				accessibilityHint={`Vai mostrar os personagens de ${item}`}
			>
				{item}
			</Link>
		),
		[]
	);

	return (
		<FlatList
			data={houses}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
		/>
	);
};
