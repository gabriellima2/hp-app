import { render, waitFor } from "@testing-library/react-native";
import * as ReactNavigation from "@react-navigation/native";
import * as ReactQuery from "react-query";

import { Characters } from "./Characters";

import { UNEXPECTED_ERROR_MESSAGE } from "@root/src/shared/errors/error-messages/unexpected-error-message";
import type { CharacterEntity } from "@/core/domain/entities/character-entities";

type MockReturnHooksParams = {
	useQueryReturn: {
		data: { body: CharacterEntity[] } | null;
		error: unknown | null;
		isLoading: boolean;
		isError: boolean;
	};
	useRouteReturn: {
		params: {
			house?: string;
		};
	};
};

jest.mock("react-query");
jest.mock("@react-navigation/native", () => ({
	useRoute: jest.fn(),
	useNavigation: () => ({ navigate: jest.fn() }),
}));

afterEach(() => {
	jest.resetAllMocks();
});

afterAll(() => {
	jest.clearAllMocks();
});

const CHARACTER: CharacterEntity = {
	id: "1",
	image: "any_image_1",
	name: "any_name_1",
};
const ERROR_MESSAGE = "any_error";
const HOUSE = "gryffindor";
const CHARACTER_LIST_ID = "character-list";
const LOADING_ID = "loading";

function mockReturnHooks(params: MockReturnHooksParams) {
	const { useQueryReturn, useRouteReturn } = params;

	(ReactNavigation.useRoute as jest.Mock).mockReturnValue({
		key: "Characters",
		name: "Characters",
		params: useRouteReturn.params,
	});

	jest
		.spyOn(ReactQuery, "useQuery")
		.mockImplementation(jest.fn().mockReturnValue(useQueryReturn));
}

function renderCharacters() {
	return render(<Characters house="" />);
}

describe("<Characters />", () => {
	describe("Render", () => {
		it("should render <Loading /> with isLoading true", async () => {
			mockReturnHooks({
				useQueryReturn: {
					data: null,
					error: null,
					isError: false,
					isLoading: true,
				},
				useRouteReturn: {
					params: {
						house: HOUSE,
					},
				},
			});
			const { getByTestId, queryByTestId, queryByText } = renderCharacters();

			expect(getByTestId(LOADING_ID)).toBeTruthy();
			expect(queryByText(ERROR_MESSAGE)).toBeFalsy();
			expect(queryByTestId(CHARACTER_LIST_ID)).toBeFalsy();
			expect(queryByText(UNEXPECTED_ERROR_MESSAGE)).toBeFalsy();
		});
		it("should render <Error /> with has request error", async () => {
			mockReturnHooks({
				useQueryReturn: {
					data: null,
					error: ERROR_MESSAGE,
					isError: true,
					isLoading: false,
				},
				useRouteReturn: {
					params: {
						house: HOUSE,
					},
				},
			});
			const { queryByTestId, findByText, queryByText } = renderCharacters();

			expect(queryByTestId(LOADING_ID)).toBeFalsy();
			await waitFor(() => expect(findByText(ERROR_MESSAGE)).toBeTruthy());
			await waitFor(() => expect(queryByTestId(CHARACTER_LIST_ID)).toBeFalsy());
			await waitFor(() =>
				expect(queryByText(UNEXPECTED_ERROR_MESSAGE)).toBeFalsy()
			);
		});
		it("should render <Error /> with has unexpected error", async () => {
			mockReturnHooks({
				useQueryReturn: {
					data: null,
					error: null,
					isError: false,
					isLoading: false,
				},
				useRouteReturn: {
					params: {
						house: HOUSE,
					},
				},
			});
			const { queryByTestId, queryByText, findByText } = renderCharacters();

			expect(queryByTestId(LOADING_ID)).toBeFalsy();
			expect(queryByText(ERROR_MESSAGE)).toBeFalsy();
			expect(queryByTestId(CHARACTER_LIST_ID)).toBeFalsy();
			expect(findByText(UNEXPECTED_ERROR_MESSAGE)).toBeTruthy();
		});
		it("should render <CharacterList /> with successfully on request", async () => {
			mockReturnHooks({
				useQueryReturn: {
					data: { body: [CHARACTER] },
					error: null,
					isError: false,
					isLoading: false,
				},
				useRouteReturn: {
					params: {
						house: HOUSE,
					},
				},
			});
			const { queryByTestId, findByTestId, queryByText } = renderCharacters();

			expect(queryByTestId(LOADING_ID)).toBeFalsy();
			await waitFor(() => expect(queryByText(ERROR_MESSAGE)).toBeFalsy());
			await waitFor(() => expect(findByTestId(CHARACTER_LIST_ID)).toBeTruthy());
			await waitFor(() =>
				expect(queryByText(UNEXPECTED_ERROR_MESSAGE)).toBeFalsy()
			);
		});
	});
});
