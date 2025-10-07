import { IComentario } from "../../../domain/entities/models/comentario.interface";

export interface IComentarioRepository {
    findById(postId: number): Promise<IComentario[] | null>;
    create(comentario: IComentario): Promise<IComentario>;
    update(comentario: IComentario): Promise<IComentario>;
    delete(comentarioId: number): Promise<void>;
}