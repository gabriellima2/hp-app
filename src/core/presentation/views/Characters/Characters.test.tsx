import { render, waitFor } from "@testing-library/react-native";
import * as ReactNavigation from "@react-navigation/native";
import * as ReactQuery from "react-query";

import { Characters } from "./Characters";

import { capitalizeFirstLetter } from "@/shared/utils/capitalize-first-letter";
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
const TITLE = `Personagens de ${capitalizeFirstLetter(HOUSE)}`;

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
			const { getByTestId, queryByText, queryByRole } = renderCharacters();

			expect(getByTestId("loading")).toBeTruthy();
			await waitFor(() => expect(queryByRole("alert")).toBeFalsy());
			await waitFor(() => expect(queryByText(ERROR_MESSAGE)).toBeFalsy());
			await waitFor(() => expect(queryByText(TITLE)).toBeFalsy());
			await waitFor(() => expect(queryByText(CHARACTER.name)).toBeFalsy());
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
			const { queryByTestId, queryByText, findByRole, findByText } =
				renderCharacters();

			expect(queryByTestId("loading")).toBeFalsy();
			await waitFor(() => expect(findByRole("alert")).toBeTruthy());
			await waitFor(() => expect(findByText(ERROR_MESSAGE)).toBeTruthy());
			await waitFor(() => expect(queryByText(TITLE)).toBeFalsy());
			await waitFor(() => expect(queryByText(CHARACTER.name)).toBeFalsy());
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
			const { queryByTestId, queryByText, queryByRole, findByText } =
				renderCharacters();

			expect(queryByTestId("loading")).toBeFalsy();
			await waitFor(() => expect(queryByRole("alert")).toBeFalsy());
			await waitFor(() => expect(queryByText(ERROR_MESSAGE)).toBeFalsy());
			await waitFor(() => expect(findByText(TITLE)).toBeTruthy());
			await waitFor(() => expect(findByText(CHARACTER.name)).toBeTruthy());
		});
	});
});
