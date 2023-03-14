import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import { Link } from "@/core/presentation/components/Link";
import { houses } from "@/shared/utils/houses";

export const HousesList = () => {
	const keyExtractor = useCallback((item: string) => item, []);
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<string>) => (
			<Link
				to={{ name: "Characters", params: { house: item.toLowerCase() } }}
				accessibilityHint={`Vai mostrar os personagens de ${item}`}
				style={styles.house}
				textStyle={styles.house__name}
			>
				- {item}
			</Link>
		),
		[]
	);

	return (
		<FlatList
			data={houses}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			contentContainerStyle={styles.houses}
		/>
	);
};

const styles = StyleSheet.create({
	houses: {
		alignItems: "flex-start",
	},
	house: {
		padding: 8,
		marginTop: 8,
	},
	house__name: {
		fontSize: 16,
		fontWeight: "500",
		opacity: 1,
	},
});
