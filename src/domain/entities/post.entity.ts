export class Post {
    postId: number;
    titulo: string;
    conteudo: string;
    disciplinaId: number;
    autorId: number;
    dtCriacao: Date;
    dtAtualizacao: Date;

    constructor(
        postId: number,
        titulo: string,
        conteudo: string,
        disciplinaId: number,
        autorId: number,
        dtCriacao: Date,
        dtAtualizacao: Date
    ) {
        this.postId = postId;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.disciplinaId = disciplinaId;
        this.autorId = autorId;
        this.dtCriacao = dtCriacao;
        this.dtAtualizacao = dtAtualizacao;
    }
}