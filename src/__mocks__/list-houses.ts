import { houses } from "../utils/houses";

export function listHouses(cb: (house: string) => void) {
	houses.map((house) => cb(house));
}
