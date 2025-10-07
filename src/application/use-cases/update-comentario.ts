import { IComentario } from "../../domain/entities/models/comentario.interface";
import { IComentarioRepository } from "../../infra/repositories/interfaces/comentario.repository.interface";

export class UpdateComentarioUseCase {
    constructor(private comentarioRepository: IComentarioRepository) {}

    async handler(comentario: IComentario){

        return this.comentarioRepository.update(comentario); 

    }

}