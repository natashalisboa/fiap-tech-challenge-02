import { IComentario } from "../../domain/entities/models/comentario.interface";
import { IComentarioRepository } from "../../infra/repositories/interfaces/comentario.repository.interface";

export class CreateComentarioUseCase {
    constructor(private comentarioRepository: IComentarioRepository) {}

    async handler(comentario: IComentario): Promise<IComentario> {
        return this.comentarioRepository.create(comentario);
    }

}