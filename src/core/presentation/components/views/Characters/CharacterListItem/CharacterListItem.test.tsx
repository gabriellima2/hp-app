import { useState } from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { CharacterListItem, IMAGE_ERROR_MESSAGE } from "./CharacterListItem";
import type { CharacterEntity } from "@/core/domain/entities/character-entities";

import { mockNavigate } from "@root/jest-setup";

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

const character: CharacterEntity = {
	id: "any_id",
	name: "any_name",
	image: "any_image",
};

function mockHasImageErrorState(initialValue = false) {
	const hasImageError = [initialValue, jest.fn()];
	useStateMocked.mockImplementation(() => hasImageError);
}

function renderCharacter(props: Parameters<typeof CharacterListItem>[0]) {
	return render(<CharacterListItem {...props} />);
}

describe("<CharacterList />", () => {
	describe("Render", () => {
		it("should render <Error /> with has image error", () => {
			mockHasImageErrorState(true);
			const { queryByLabelText, getByText, getByLabelText } = renderCharacter({
				...character,
			});

			expect(getByLabelText(IMAGE_ERROR_MESSAGE)).toBeTruthy();
			expect(getByText(character.name)).toBeTruthy();
			expect(queryByLabelText(`Imagem do ${character.name}`)).toBeFalsy();
		});
		it("should render <Error /> with empty image field", () => {
			mockHasImageErrorState();
			const { queryByLabelText, getByText, getByLabelText } = renderCharacter({
				...character,
				image: "",
			});

			expect(getByLabelText(IMAGE_ERROR_MESSAGE)).toBeTruthy();
			expect(getByText(character.name)).toBeTruthy();
			expect(queryByLabelText(`Imagem do ${character.name}`)).toBeFalsy();
		});
		it("should render correctly the list", () => {
			mockHasImageErrorState();
			const { queryByLabelText, getByText, getByLabelText } = renderCharacter({
				...character,
			});

			expect(queryByLabelText(IMAGE_ERROR_MESSAGE)).toBeFalsy();
			expect(getByText(character.name)).toBeTruthy();
			expect(getByLabelText(`Imagem do ${character.name}`)).toBeTruthy();
		});
	});
	describe("Interactions", () => {
		describe("Press", () => {
			it("should call the function when clicking on the character item", () => {
				mockHasImageErrorState();
				const { getByLabelText } = renderCharacter({ ...character });
				const linkElement = getByLabelText(`Detalhes de ${character.name}`);
				fireEvent.press(linkElement);

				expect(mockNavigate).toHaveBeenCalledWith("Details", {
					id: character.name.toLowerCase(),
				});
			});
		});
	});
});
