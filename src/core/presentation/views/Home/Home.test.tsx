import { render } from "@testing-library/react-native";
import { Home } from "./Home";

describe("<Home />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			const { getByText } = render(<Home />);
			expect(getByText("Explore os personagens de Harry Potter")).toBeTruthy();
		});
	});
});
