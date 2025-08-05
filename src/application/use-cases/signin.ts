import { IUsuarioRepository } from "../../infra/repositories/interfaces/usuario.repository.interface";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

export class SigninUseCase {
    constructor(private readonly usuarioRepository: IUsuarioRepository) {}

    async handler(email: string){
        const usuario = await this.usuarioRepository.findByEmail(email);

        if (!usuario) {
            throw new InvalidCredentialsError()
        }

        return usuario;
    }

}