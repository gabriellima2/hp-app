import { render } from "@testing-library/react-native";

import { CharacterList } from "./CharacterList";
import type { CharacterEntity } from "@/core/domain/entities/character-entities";

const CHARACTERS: CharacterEntity[] = [
	{ id: "any_id", image: "any_image", name: "any_name" },
];

function renderCharacterList(props: Parameters<typeof CharacterList>[0]) {
	return render(<CharacterList {...props} />);
}

function listCharacters(
	characters: CharacterEntity[],
	cb: (character: CharacterEntity) => void
) {
	characters.forEach((character) => cb(character));
}

describe("<CharacterList />", () => {
	describe("Render", () => {
		it("should render correctly the list", () => {
			const { getByText, getByLabelText } = renderCharacterList({
				characters: CHARACTERS,
			});

			listCharacters(CHARACTERS, (character) => {
				expect(getByText(character.name)).toBeTruthy();
				expect(getByLabelText(`Imagem do ${character.name}`)).toBeTruthy();
			});
		});
	});
});
