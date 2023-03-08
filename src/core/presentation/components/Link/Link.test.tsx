import { fireEvent, render } from "@testing-library/react-native";

import { Link } from "./Link";
import { mockNavigate } from "../../../../../jest-setup";

const LINK_TEXT = "Link";
const SCREEN_NAME = "Details";

function renderLink() {
	return render(<Link to={{ name: SCREEN_NAME }}>{LINK_TEXT}</Link>);
}

describe("<Link />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			const { getByText } = renderLink();
			expect(getByText(LINK_TEXT)).toBeTruthy();
		});
	});
	describe("Interactions", () => {
		describe("Press", () => {
			it("should call the navigate function when clicking on the house", () => {
				const { getByText } = renderLink();
				const link = getByText(LINK_TEXT);
				fireEvent.press(link);
				expect(mockNavigate).toHaveBeenCalledWith(SCREEN_NAME);
			});
		});
	});
});
