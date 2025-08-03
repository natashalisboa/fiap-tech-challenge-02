export class Usuario {
    userId: number;
    nome: string;
    usuario: string;
    senha: string;
    cargo: number;
    dtCriacao: Date;
    dtAtualizacao: Date;

    constructor(
        userId: number,
        nome: string,
        usuario: string,
        senha: string,
        cargo: number,
        dtCriacao: Date,
        dtAtualizacao: Date
    ) {
        this.userId = userId;
        this.nome = nome;
        this.usuario = usuario;
        this.senha = senha;
        this.cargo = cargo;
        this.dtCriacao = dtCriacao;
        this.dtAtualizacao = dtAtualizacao;
    }
}

