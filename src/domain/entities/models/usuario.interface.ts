import { ICargo } from "./cargo.interface";

export interface IUsuario {
    userId?: number;
    nome: string;
    email: string;
    senha: string;
    cargo: ICargo; // 1 - Administrador, 2 - Professor, 3 - Aluno
    dtCriacao?: Date;
    dtAtualizacao?: Date;
}