export type StackParams = {
	Home: undefined;
	Characters: { house: string };
	Details: { character: string };
};

export type StackNames = keyof StackParams;
