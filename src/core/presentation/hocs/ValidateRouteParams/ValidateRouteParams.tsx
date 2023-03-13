import { useRoute } from "@react-navigation/native";
import type { ComponentType } from "react";

import { TextError } from "../../components";

export function ValidateRouteParams<P extends object>(
	Component: ComponentType<P>
) {
	return function HighOrder(props: P) {
		const { params } = useRoute();
		if (!params) return <TextError message="Error" />;

		const has = Object.values(params).some((param) => !param);
		if (has) return <TextError message="Error" />;

		return <Component {...props} />;
	};
}
