import { ParamListBase, useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

export function useNavigate<T extends ParamListBase>() {
	return useNavigation<StackNavigationProp<T>>();
}
