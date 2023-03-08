import { Title, HousesList } from "../../components";
import { AppLayout } from "../../layouts";

export const Home = () => {
	return (
		<AppLayout>
			<Title>Explore os personagens de Harry Potter</Title>
			<HousesList />
		</AppLayout>
	);
};
