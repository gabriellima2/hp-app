import { render } from "@testing-library/react-native";
import * as ReactNavigation from "@react-navigation/native";

import { Details } from "./Details";

jest.mock("@react-navigation/native", () => ({
	useRoute: jest.fn(),
}));

function renderDetails(props: Parameters<typeof Details>[0]) {
	(ReactNavigation.useRoute as jest.Mock).mockReturnValue({
		key: "Characters",
		name: "Characters",
		params: props.id,
	});

	return render(<Details {...props} />);
}

describe("<Details />", () => {
	it("should render correctly", () => {
		const { getByText } = renderDetails({ id: "Hello" });
		expect(getByText("Hello")).toBeTruthy();
	});
});
