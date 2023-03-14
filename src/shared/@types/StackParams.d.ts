export type StackParams = {
	Home: undefined;
	Characters: { house: string };
	Details: undefined;
};

export type StackNames = keyof StackParams;
