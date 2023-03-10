export interface IHttpClient<BodyResponse> {
	execute: (
		params: HttpClient.Request
	) => Promise<HttpClient.Response<BodyResponse>>;
}

export namespace HttpClient {
	export type Request = {
		url: string;
		method: "post" | "get" | "put" | "delete";
		body?: unknown;
		headers?: unknown;
	};
	export type Response<Body> = {
		statusCode: number;
		ok: boolean;
		body: Body;
	};
}
