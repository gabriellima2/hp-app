import { CharacterEntity } from "../../entities";
import { HttpClient } from "../../adapters/http-client";

export interface IGetCharactersByHouse {
	execute(
		params: GetCharactersByHouse.Params
	): Promise<GetCharactersByHouse.Response>;
}
export namespace GetCharactersByHouse {
	export type Params = {
		house: string;
	};
	export type Response = HttpClient.Response<CharacterEntity[]>;
}
