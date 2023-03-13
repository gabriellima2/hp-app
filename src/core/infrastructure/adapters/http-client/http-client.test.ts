import { HttpClientImpl } from "./http-client";
import { HttpClient } from "@/core/domain/adapters/http-client";

jest.mock("./http-client.ts");

const RESPONSE_MOCK = {
	ok: true,
	statusCode: 200,
	body: JSON.parse("[]"),
};

const mockMethod = jest.fn().mockImplementation(() => {
	return new Promise((resolve) => {
		resolve(RESPONSE_MOCK);
	});
});

(HttpClientImpl as jest.Mock).mockImplementation(() => {
	return {
		execute: mockMethod,
	};
});

beforeEach(() => {
	jest.clearAllMocks();
});

const makeHttpClient = () => new HttpClientImpl();

describe("Http client adapter", () => {
	it("should return a mock success response", async () => {
		const params: HttpClient.Request = {
			method: "get",
			url: "/",
		};
		const httpClient = makeHttpClient();
		const response = await httpClient.execute(params);
		expect(httpClient.execute).toHaveBeenCalledWith(params);
		expect(response).toStrictEqual({ ...RESPONSE_MOCK, body: [] });
	});
});
