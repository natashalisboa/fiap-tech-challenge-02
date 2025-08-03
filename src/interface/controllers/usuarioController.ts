import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UsuarioRepository } from "../../infra/repositories/usuario.repository";
import { CreateUsuario } from "../../application/use-cases/createUsuario";


//TODO: Alterar o uso do Fastify para o uso do Express
export async function create(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema = z.object({
        nome: z.string(),
        usuario: z.string(),
        senha: z.string(),
        cargo: z.number().int()
    });

    const { nome, usuario, senha, cargo } = registerBodySchema.parse(request.body);

    try {
        const usuarioRepository = new UsuarioRepository();
        const createUsuario = new CreateUsuario(usuarioRepository);
        
        await createUsuario.createUsuario({
            userId: 0, //auto-generated
            nome,
            usuario,
            senha,
            cargo,
            dtCriacao: new Date(),
            dtAtualizacao: new Date()
        });

        return reply.status(201).send({ message: "Usuário criado com sucesso!" });

    } catch (error) {
        console.error("Erro ao criar usuário:", error);

        throw new Error("Erro ao criar usuário");
    }
}