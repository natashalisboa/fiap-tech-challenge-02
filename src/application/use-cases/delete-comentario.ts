import { IComentarioRepository } from "../../infra/repositories/interfaces/comentario.repository.interface";

export class DeleteComentarioUseCase {
    constructor(private comentarioRepository: IComentarioRepository) {}

    async handler(comentarioId: number){

        return this.comentarioRepository.delete(comentarioId); 

    }

}