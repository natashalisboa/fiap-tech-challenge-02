import { IPost } from "./post.interface";
import { IUsuario } from "./usuario.interface";

export interface IComentario {
    comentarioId?: number;
    post: IPost;
    autor: IUsuario;
    conteudo: string;
    dtCriacao: Date;
    dtAtualizacao: Date;
}
