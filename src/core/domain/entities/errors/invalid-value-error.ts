export class InvalidValueError extends Error {
	constructor(value: string) {
		super(`Ocorreu um erro, o valor '${value}' é inválido!`);
		this.name = "InvalidValueError";
	}
}
