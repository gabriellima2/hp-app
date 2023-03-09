export type StackParams = {
	Home: undefined;
	Characters: undefined;
	Details: { house: string };
};

export type StackNames = keyof StackParams;
