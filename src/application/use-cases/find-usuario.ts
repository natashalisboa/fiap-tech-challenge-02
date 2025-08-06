import { IUsuarioRepository } from "../../infra/repositories/interfaces/usuario.repository.interface";

export class FindUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    async handler(id: number){

        const usuario = await this.usuarioRepository.findById(id);
        
        if (!usuario) throw new Error("Usuário não encontrado");

        return this.usuarioRepository.findById(id);
    }

}