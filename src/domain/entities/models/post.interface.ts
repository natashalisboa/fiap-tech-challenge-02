import { IDisciplina } from "./disciplina.interface";
import { IUsuario } from "./usuario.interface";

export interface IPost {
    postId?: number;
    titulo: string;
    conteudo: string;
    disciplinaId: IDisciplina;
    autorId: IUsuario;
    dtCriacao: Date;
    dtAtualizacao: Date;
}
