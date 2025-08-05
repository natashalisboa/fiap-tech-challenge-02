import { IUsuarioRepository } from "../../infra/repositories/interfaces/usuario.repository.interface";

export class FindAllUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    async handler(page: number, limit: number){
        return this.usuarioRepository.findAll(page, limit); 
    }

}