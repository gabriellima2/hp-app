import { useQuery } from "react-query";

export function useFetch<TData>(key: string, fetcher: () => Promise<TData>) {
	return useQuery<TData>(key, fetcher);
}
