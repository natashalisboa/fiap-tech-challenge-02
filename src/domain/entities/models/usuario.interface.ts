import { ICargo } from "./cargo.interface";

export interface IUsuario {
    userId?: number;
    nome: string;
    email: string;
    senha: string;
    cargo: ICargo; // 1 - Professor, 2 - Aluno, 3 - Admin
    dtCriacao?: Date;
    dtAtualizacao?: Date;
}