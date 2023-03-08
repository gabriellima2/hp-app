import { Title, HousesList } from "@/core/presentation/components";
import { AppLayout } from "@/core/presentation/layouts";

export const Home = () => {
	return (
		<AppLayout>
			<Title>Explore os personagens de Harry Potter</Title>
			<HousesList />
		</AppLayout>
	);
};
