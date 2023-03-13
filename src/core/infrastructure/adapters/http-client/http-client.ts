import { HttpClient, IHttpClient } from "@/core/domain/adapters/http-client";

export class HttpClientImpl<Body> implements IHttpClient<Body> {
	async execute(
		params: HttpClient.Request
	): Promise<HttpClient.Response<Body>> {
		const response = await fetch(params.url, {
			method: params.method,
			body: params.body as BodyInit,
			headers: params.headers as HeadersInit,
		});
		const data: Body = await response.json();
		return { body: data, statusCode: response.status, ok: response.ok };
	}
}
