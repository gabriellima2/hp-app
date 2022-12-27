import { useFetch } from "../../../../../hooks/useFetch";
import { charactersServices } from "../../../services/characters-services";

import type { Character } from "../../../@types/Character";

interface Return {
	characters: Character[];
	error: unknown;
	isError: boolean;
	isLoading: boolean;
}

export function useCharacters(house: string): Return {
	const { data, error, isLoading, isError } = useFetch<Character[]>(
		"characters",
		() => charactersServices.get(house)
	);

	return {
		characters: data,
		error,
		isLoading,
		isError,
	};
}
