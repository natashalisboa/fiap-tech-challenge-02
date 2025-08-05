import { IUsuario } from "../../domain/entities/models/usuario.interface";
import { Usuario } from "../../domain/entities/usuario.entity";
import { IUsuarioRepository } from "../../infra/repositories/interfaces/usuario.repository.interface";

export class CreateUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    async handler(usuario: IUsuario): Promise<IUsuario> {
        return this.usuarioRepository.create(usuario);
    }

}