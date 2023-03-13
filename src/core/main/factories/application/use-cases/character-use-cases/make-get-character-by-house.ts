import { CharacterEntity } from "@/core/domain/entities/character-entities";

import { GetCharactersByHouseImpl } from "@/core/application/use-cases/character-use-cases";

import { makeHttpClient } from "@/core/main/factories/infrastructure/adapters/make-http-client";
import { makeApiUrl } from "@/core/main/factories/infrastructure/make-api-url";

export const makeGetCharacterByHouse = () =>
	new GetCharactersByHouseImpl(
		makeApiUrl("/house"),
		makeHttpClient<CharacterEntity[]>()
	);
