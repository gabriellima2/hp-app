import { BASE_API_URL } from "@/shared/constants/base-api-url";

export const makeApiUrl = (path?: string) => {
	return path ? `${BASE_API_URL}${path}/` : BASE_API_URL;
};
