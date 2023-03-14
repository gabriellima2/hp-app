import { Text, View } from "react-native";
import { render } from "@testing-library/react-native";
import * as ReactNavigation from "@react-navigation/native";

import { ERROR_MESSAGE, ValidateRouteParams } from "./";

type Params = {
	house: string;
	character: string;
};

jest.mock("@react-navigation/native", () => ({
	useRoute: jest.fn(),
}));

afterEach(() => {
	jest.resetAllMocks();
});

afterAll(() => {
	jest.clearAllMocks();
});

const Component = ValidateRouteParams<Params>((props) => (
	<View>
		<Text>{props.house} </Text>
		<Text>{props.character} </Text>
	</View>
));

describe("<ValidateRouteParams />", () => {
	describe("Render", () => {
		it("should render error with empty url params", () => {
			const params: Params = {
				house: "",
				character: "",
			};
			(ReactNavigation.useRoute as jest.Mock).mockReturnValue({
				key: "Details",
				name: "Details",
				params,
			});
			const { queryByText, getByText } = render(
				<Component character="" house="" />
			);
			expect(getByText(ERROR_MESSAGE)).toBeTruthy();
			expect(queryByText(params.house)).toBeFalsy();
			expect(queryByText(params.character)).toBeFalsy();
		});
		it("should render component passed with filled url params", () => {
			const params: Params = {
				house: "any_house",
				character: "any_character",
			};
			(ReactNavigation.useRoute as jest.Mock).mockReturnValue({
				key: "Details",
				name: "Details",
				params,
			});
			const { queryByText, getByText } = render(
				<Component character="" house="" />
			);
			expect(queryByText(ERROR_MESSAGE)).toBeFalsy();
			expect(getByText(params.house)).toBeTruthy();
			expect(getByText(params.character)).toBeTruthy();
		});
	});
});
