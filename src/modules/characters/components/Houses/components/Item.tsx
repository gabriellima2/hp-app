import { useNavigate } from "../../../../../hooks/useNavigate";
import { Link } from "../../../../../components/Link";

import type { StackQuery } from "../../../@types/StackQuery";
import { StyleSheet } from "react-native";
import { themes } from "../../../../../styles/themes";

interface ItemProps {
	name: string;
}

export const Item = ({ name }: ItemProps) => {
	const { navigate } = useNavigate<StackQuery>();

	return (
		<Link
			onPress={() => navigate("Characters", { houseName: name })}
			style={styles.link}
		>
			{name}
		</Link>
	);
};

const styles = StyleSheet.create({
	link: {
		marginVertical: 4,
		borderRadius: 4,
		padding: 12,
		backgroundColor: themes.utilColor,
	},
});
