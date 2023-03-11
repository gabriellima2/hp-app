import {
	BadRequestError,
	EmptyFieldError,
} from "@/core/domain/entities/errors";
import {
	GetCharactersByHouse,
	IGetCharactersByHouse,
} from "@/core/domain/use-cases/character-use-cases";
import { IHttpClient } from "@/core/domain/adapters/http-client";
import { CharacterEntity } from "@/core/domain/entities/character-entities";

export class GetCharactersByHouseImpl implements IGetCharactersByHouse {
	constructor(
		private readonly url: string,
		private readonly httpClient: IHttpClient<CharacterEntity[]>
	) {}

	public async execute(
		params: GetCharactersByHouse.Params
	): Promise<GetCharactersByHouse.Response> {
		const formattedHouseName = params.house.trim().toLowerCase();
		if (!formattedHouseName) throw new EmptyFieldError("house");

		const response = await this.httpClient.execute({
			url: `${this.url}${formattedHouseName}`,
			method: "get",
		});
		if (!response.ok) throw new BadRequestError();
		return response;
	}
}
