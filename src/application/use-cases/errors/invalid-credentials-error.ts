export class InvalidCredentialsError extends Error {
    constructor() {
        super("email ou senha inválidos");
    }
}