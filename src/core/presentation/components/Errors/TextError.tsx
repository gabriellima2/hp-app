import { Title } from "../Title";

type TextErrorProps = Pick<Parameters<typeof Title>[0], "style"> & {
	message: string;
};

export const TextError = (props: TextErrorProps) => {
	const { message, style } = props;
	return (
		<Title accessibilityRole="alert" style={style}>
			{message}
		</Title>
	);
};
