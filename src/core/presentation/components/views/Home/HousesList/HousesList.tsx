import { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { Link } from "@/core/presentation/components/Link";
import { houses } from "@/shared/utils/houses";

export const HousesList = () => {
	const keyExtractor = useCallback((item: string) => item, []);
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<string>) => (
			<Link
				to={{ name: "Details", params: { house: item.toLowerCase() } }}
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
