import { useRoute } from "@react-navigation/native";
import type { ComponentType } from "react";

import { TextError } from "@/core/presentation/components";

export const ERROR_MESSAGE = "Valor obrigatório indefinido!";

export function ValidateRouteParams<P extends object>(
	Component: ComponentType<P>
) {
	return function HighOrder(props: P) {
		const { params } = useRoute();
		if (!params || Object.values(params).some((param) => !param))
			return <TextError message={ERROR_MESSAGE} />;

		return <Component {...props} {...params} />;
	};
}
