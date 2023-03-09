import { render } from "@testing-library/react-native";

import { Home } from "./Home";
import { listHouses } from "@/__mocks__";

const TITLE_TEXT = "Explore os personagens de Harry Potter";

describe("<Home />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			const { findByText, getByText } = render(<Home />);

			expect(getByText(TITLE_TEXT)).toBeTruthy();
			listHouses((house) => {
				expect(findByText(house)).toBeTruthy();
			});
		});
	});
});
