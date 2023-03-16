import { Title } from "@/core/presentation/components";
import { AppLayout } from "@/core/presentation/layouts";

import { ValidateRouteParams } from "@/shared/hocs/ValidateRouteParams";

type DetailsProps = {
	id: string;
};

export const Details = ValidateRouteParams<DetailsProps>((props) => {
	return (
		<AppLayout>
			<Title>{props.id}</Title>
		</AppLayout>
	);
});
