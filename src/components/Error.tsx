import { Text } from "./Text";

interface ErrorProps {
	message: string;
}

export const Error = ({ message }: ErrorProps) => (
	<Text.Medium>{message}</Text.Medium>
);
