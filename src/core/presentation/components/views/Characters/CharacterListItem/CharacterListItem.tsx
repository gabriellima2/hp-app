import { useState } from "react";
import { Image, StyleSheet } from "react-native";

import { ImageNotFound } from "@/core/presentation/components/ImageNotFound";
import { Title } from "@/core/presentation/components/Title";
import { Link } from "@/core/presentation/components/Link";

import { CharacterEntity } from "@/core/domain/entities/character-entities";

type CharacterListItemProps = Omit<CharacterEntity, "id">;

export const IMAGE_ERROR_MESSAGE = "Ocorreu um erro com a image";

export const CharacterListItem = (props: CharacterListItemProps) => {
	const { image, name } = props;
	const [hasImageError, setHasImageError] = useState(false);

	return (
		<Link
			variants="container"
			to={{
				name: "Details",
				params: { id: name.toLowerCase() },
			}}
			accessibilityLabel={`Detalhes de ${name}`}
			accessibilityHint={`Vai para tela de detalhes de ${name}`}
			style={styles.character}
		>
			{image && !hasImageError ? (
				<Image
					accessibilityLabel={`Imagem do ${name}`}
					source={{ uri: image }}
					resizeMode="contain"
					onError={() => setHasImageError(true)}
					style={styles.character__image}
				/>
			) : (
				<ImageNotFound
					style={styles.character__image}
					accessibilityLabel={IMAGE_ERROR_MESSAGE}
				/>
			)}
			<Title style={styles.character__name}>{name}</Title>
		</Link>
	);
};

const styles = StyleSheet.create({
	character: {
		alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		borderBottomWidth: 1,
		borderBottomColor: "#ffffff1a",
		paddingVertical: 16,
	},
	character__image: {
		width: 56,
		height: 56,
		borderRadius: 75,
	},
	character__name: {
		fontSize: 14,
		fontWeight: "500",
		marginLeft: 16,
	},
});
