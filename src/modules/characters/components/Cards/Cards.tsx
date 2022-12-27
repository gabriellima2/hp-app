import { useCharacters } from "./hooks/useCharacters";

import { Loading } from "../../../../components/Loading";
import { Error } from "../../../../components/Error";
import { List } from "../../../../components/List";
import { Card } from "./components";

interface CardsProps {
	house: string;
}

export const Cards = ({ house }: CardsProps) => {
	const { characters, error, isError, isLoading } = useCharacters(house);

	if (isLoading) return <Loading />;

	if (isError) return <Error message={(error as Error).message} />;

	return <List data={characters} Item={Card} />;
};
