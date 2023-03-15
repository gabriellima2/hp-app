import { StyleSheet, View } from "react-native";
import { useQuery } from "react-query";

import { makeGetCharacterByHouse } from "@/core/main/factories/application/use-cases/character-use-cases";

import {
	Title,
	TextError,
	Loading,
	CharacterList,
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
			{data ? (
				<View>
					<Title style={styles.title}>
						Personagens de {capitalizeFirstLetter(props.house)}
					</Title>
					<CharacterList characters={data.body} />
				</View>
			) : (
				<TextError
					message={
						"Ocorreu um erro! Por favor, verifique sua conexão e/ou tente novamente"
					}
				/>
			)}
		</AppLayout>
	);
});

const styles = StyleSheet.create({
	title: {
		paddingBottom: 20,
	},
});
