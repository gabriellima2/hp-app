export class EmptyFieldError extends Error {
	constructor(field: string) {
		super(`Ocorreu um erro, o campo '${field}' é obrigatório!`);
		this.name = "EmptyFieldError";
	}
}
