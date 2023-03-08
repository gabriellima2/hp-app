import { fireEvent, render } from "@testing-library/react-native";

import { HousesList } from "./HousesList";

import { mockNavigate } from "@root/jest-setup";
import { listHouses } from "@/__mocks__";

import { houses } from "@/utils/houses";

const HOUSE_HINT = "Vai mostrar os personagens de";

function renderHousesListComponent() {
	return render(<HousesList />);
}

describe("<Houses />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			const { getByText } = renderHousesListComponent();
			houses.map((house) => expect(getByText(house)).toBeTruthy());
		});
	});
	describe("Interactions", () => {
		describe("Press", () => {
			it("should call the function when clicking on the house", () => {
				const { getByAccessibilityHint } = renderHousesListComponent();

				listHouses((house) => {
					const houseOption = getByAccessibilityHint(`${HOUSE_HINT} ${house}`);
					fireEvent.press(houseOption);

					expect(mockNavigate).toHaveBeenCalledWith("Details", {
						house: house.toLowerCase(),
					});
				});
			});
		});
	});
});
