import { useState } from "react";
import { render } from "@testing-library/react-native";

import { CharacterListItem, IMAGE_ERROR_MESSAGE } from "./CharacterListItem";
import type { CharacterEntity } from "@/core/domain/entities/character-entities";

jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({ navigate: jest.fn() }),
}));

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: jest.fn(),
}));

const useStateMocked = useState as jest.Mock;

afterEach(() => {
	useStateMocked.mockImplementation(jest.requireActual("react").useState);
	jest.clearAllMocks();
});

afterAll(() => {
	jest.resetAllMocks();
});

function renderCharacter(props: Parameters<typeof CharacterListItem>[0]) {
	return render(<CharacterListItem {...props} />);
}

describe("<CharacterList />", () => {
	describe("Render", () => {
		it("should render <Error /> with has image error", () => {
			const hasImageError = [true, jest.fn()];
			const character: CharacterEntity = {
				id: "any_id",
				name: "any_name",
				image: "any_image",
			};

			useStateMocked.mockImplementation(() => hasImageError);
			const { queryByLabelText, getByText, getByLabelText } = renderCharacter({
				...character,
			});

			expect(getByLabelText(IMAGE_ERROR_MESSAGE)).toBeTruthy();
			expect(getByText(character.name)).toBeTruthy();
			expect(queryByLabelText(`Imagem do ${character.name}`)).toBeFalsy();
		});
		it("should render <Error /> with empty image", () => {
			const hasImageError = [false, jest.fn()];
			const character: CharacterEntity = {
				id: "any_id",
				name: "any_name",
				image: "",
			};

			useStateMocked.mockImplementation(() => hasImageError);
			const { queryByLabelText, getByText, getByLabelText } = renderCharacter({
				...character,
			});

			expect(getByLabelText(IMAGE_ERROR_MESSAGE)).toBeTruthy();
			expect(getByText(character.name)).toBeTruthy();
			expect(queryByLabelText(`Imagem do ${character.name}`)).toBeFalsy();
		});
		it("should render correctly the list", () => {
			const hasImageError = [false, jest.fn()];
			const character: CharacterEntity = {
				id: "any_id",
				name: "any_name",
				image: "any_image",
			};

			useStateMocked.mockImplementation(() => hasImageError);
			const { queryByLabelText, getByText, getByLabelText } = renderCharacter({
				...character,
			});

			expect(queryByLabelText(IMAGE_ERROR_MESSAGE)).toBeFalsy();
			expect(getByText(character.name)).toBeTruthy();
			expect(getByLabelText(`Imagem do ${character.name}`)).toBeTruthy();
		});
	});
});
