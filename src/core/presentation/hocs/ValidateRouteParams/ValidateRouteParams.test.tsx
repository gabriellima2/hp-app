import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import * as ReactNavigation from "@react-navigation/native";

import { ValidateRouteParams } from "./";

jest.mock("@react-navigation/native", () => ({
	useRoute: jest.fn(),
}));

afterEach(() => {
	jest.resetAllMocks();
});

afterAll(() => {
	jest.clearAllMocks();
});

const COMPONENT_TEXT = "any_text";
const Component = ValidateRouteParams(() => <Text>{COMPONENT_TEXT}</Text>);

describe("<ValidateRouteParams />", () => {
	describe("Render", () => {
		it("should render error with empty url params", () => {
			(ReactNavigation.useRoute as jest.Mock).mockReturnValue({
				key: "Details",
				name: "Details",
				params: { house: "", character: "" },
			});
			const { queryByText, getByText } = render(<Component />);
			expect(getByText("Error")).toBeTruthy();
			expect(queryByText(COMPONENT_TEXT)).toBeFalsy();
		});
		it("should render component passed with filled url params", () => {
			(ReactNavigation.useRoute as jest.Mock).mockReturnValue({
				key: "Details",
				name: "Details",
				params: { house: "any_house", character: "any_character" },
			});
			const { queryByText, getByText } = render(<Component />);
			expect(queryByText("Error")).toBeFalsy();
			expect(getByText(COMPONENT_TEXT)).toBeTruthy();
		});
	});
});
