import { IUsuario } from "../../domain/entities/models/usuario.interface";
import { IUsuarioRepository } from "../../infra/repositories/interfaces/usuario.repository.interface";

export class DeleteUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    async handler(userId: number){

        return this.usuarioRepository.delete(userId); 

    }

}