import { GetCharactersByHouseImpl } from "./get-characters-by-house-impl";

import {
	BadRequestError,
	EmptyFieldError,
} from "@/core/domain/entities/errors";
import { HttpClient, IHttpClient } from "@/core/domain/adapters/http-client";
import { CharacterEntity } from "@/core/domain/entities/character-entities";

import { HttpStatusCode } from "@/shared/helpers/http-status-code";

const character: CharacterEntity = {
	id: "1",
	name: "any_name1",
	image: "any_image1",
};

const characters: { [key: string]: CharacterEntity[] } = {
	gryffindor: [character],
	hufflepuff: [character],
	ravenclaw: [character],
	slytherin: [character],
};

class HttpClientImpl implements IHttpClient<CharacterEntity[]> {
	async execute(
		params: HttpClient.Request
	): Promise<HttpClient.Response<CharacterEntity[]>> {
		return new Promise((resolve) => {
			const house = params.url.slice(params.url.lastIndexOf("/") + 1);
			if (!house)
				return resolve({
					ok: false,
					statusCode: HttpStatusCode.notFound,
					body: [],
				});

			const charactersFinded = characters[house];
			if (!charactersFinded)
				return resolve({
					ok: false,
					statusCode: HttpStatusCode.badRequest,
					body: [],
				});

			resolve({
				ok: true,
				statusCode: HttpStatusCode.ok,
				body: charactersFinded,
			});
		});
	}
}

const makeGetCharactersByHouse = () => {
	const url = "http://characters_url_mock.com/";
	const httpClient = new HttpClientImpl();
	return new GetCharactersByHouseImpl(url, httpClient);
};

describe("Get characters by house use-case", () => {
	const HOUSE_NAME = "gryffindor";

	it("should get characters with valid house name", async () => {
		const sut = makeGetCharactersByHouse();
		const response = await sut.execute({ house: HOUSE_NAME });
		expect(response.ok).toBeTruthy();
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.body).toEqual(characters[HOUSE_NAME]);
	});

	it("should not get characters with invalid house name", async () => {
		const invalidHouseName = "another_name";
		try {
			const getCharacters = makeGetCharactersByHouse();
			const response = await getCharacters.execute({ house: invalidHouseName });
			expect(response.ok).toBeFalsy();
			expect(response.statusCode).toBe(HttpStatusCode.badRequest);
			expect(response.body).toEqual([]);
		} catch (err) {
			expect((err as Error).message).toEqual(new BadRequestError().message);
		}
	});

	it("should not get characters with empty house name", async () => {
		try {
			const getCharacters = makeGetCharactersByHouse();
			const response = await getCharacters.execute({ house: "" });
			expect(response.ok).toBeFalsy();
			expect(response.statusCode).toBe(HttpStatusCode.notFound);
			expect(response.body).toEqual([]);
		} catch (err) {
			expect((err as Error).message).toEqual(
				new EmptyFieldError("house").message
			);
		}
	});
});
