import { useNavigation as useReactNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { StackParams } from "@root/src/@types/StackParams";

export const useNavigation = () =>
	useReactNavigation<StackNavigationProp<StackParams>>();
