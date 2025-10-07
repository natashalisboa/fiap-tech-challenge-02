import { IComentarioRepository } from "../../infra/repositories/interfaces/comentario.repository.interface";

export class FindComentarioUseCase {
    constructor(private comentarioRepository: IComentarioRepository) {}

    async handler(postId: number){
        
        return this.comentarioRepository.findById(postId);
    }

}