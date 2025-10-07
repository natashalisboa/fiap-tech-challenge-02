import { IComentario } from "./comentario.interface";
import { IDisciplina } from "./disciplina.interface";
import { IUsuario } from "./usuario.interface";

export interface IPost {
    postId?: number;
    titulo: string;
    conteudo: string;
    disciplina: IDisciplina;
    autor: IUsuario;
    comentarios: IComentario[];
    dtCriacao: Date;
    dtAtualizacao: Date;
}
