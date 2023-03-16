export type StackParams = {
	Home: undefined;
	Characters: { house: string };
	Details: { id: string };
};

export type StackNames = keyof StackParams;
