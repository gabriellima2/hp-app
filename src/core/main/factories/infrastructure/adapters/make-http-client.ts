import { HttpClientImpl } from "@/core/infrastructure/adapters/http-client";

export const makeHttpClient = <Body>() => new HttpClientImpl<Body>();
