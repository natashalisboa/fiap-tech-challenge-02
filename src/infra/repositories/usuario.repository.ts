import { create } from "domain";
import { Usuario } from "../../domain/entities/usuario.entity";

export class UsuarioRepository {
    async findById(userId: number): Promise<Usuario> {
        return {
            userId,
            nome: "Nome Exemplo",
            usuario: "usuario_exemplo",
            senha: "senha_exemplo",
            cargo: 1,
            dtCriacao: new Date(),
            dtAtualizacao: new Date()
        }
    }

    async create(usuario: Usuario): Promise<Usuario> {
        // Simula a criação de um usuário
        return usuario;
    }
}

