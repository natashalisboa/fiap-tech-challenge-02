import { IUsuario } from "../../domain/entities/models/usuario.interface";
import { IUsuarioRepository } from "../../infra/repositories/interfaces/usuario.repository.interface";

export class UpdateUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    async handler(usuario: IUsuario){

        return this.usuarioRepository.update(usuario); 

    }

}