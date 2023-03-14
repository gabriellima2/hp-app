import { FlatList, View } from "react-native";
import { useQuery } from "react-query";

import { makeGetCharacterByHouse } from "@/core/main/factories/application/use-cases/character-use-cases";

import {
	Paragraph,
	Title,
	TextError,
	Loading,
} from "@/core/presentation/components";
import { AppLayout } from "@/core/presentation/layouts";

import { ValidateRouteParams } from "@/shared/hocs/ValidateRouteParams";
import { capitalizeFirstLetter } from "@/shared/utils/capitalize-first-letter";

type CharactersProps = {
	house: string;
};

export const Characters = ValidateRouteParams<CharactersProps>((props) => {
	const { data, error, isLoading, isError } = useQuery(
		"get-character-by-house",
		() => makeGetCharacterByHouse().execute({ house: props.house })
	);

	return (
		<AppLayout>
			{isLoading && <Loading />}
			{isError && <TextError message={(error as Error).message} />}
			{data && (
				<View>
					<Title>Personagens de {capitalizeFirstLetter(props.house)}</Title>
					<FlatList
						data={data.body}
						keyExtractor={({ id }) => id}
						renderItem={({ item }) => <Paragraph>{item.name}</Paragraph>}
					/>
				</View>
			)}
		</AppLayout>
	);
});
