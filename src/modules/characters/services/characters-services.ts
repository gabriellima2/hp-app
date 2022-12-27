import { API_URL } from "../constants/API_URL";

export const charactersServices = {
	get: async (house: string) => {
		try {
			const response = await fetch(`${API_URL}/house/${house.toLowerCase()}`);
			const data = await response.json();

			return data;
		} catch (err) {
			console.error((err as Error).message);
		}
	},
};
