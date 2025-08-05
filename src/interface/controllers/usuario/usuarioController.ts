import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UsuarioRepository } from "../../../infra/repositories/usuario.repository";
import { makeCreateUsuarioUseCase } from "../../../application/use-cases/factory/make-create-usuario-use-case";


//TODO: Alterar o uso do Fastify para o uso do Express
export async function create(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema = z.object({
        userId: z.string().optional(),
        nome: z.string(),
        email: z.string(),
        senha: z.string(),
        cargo: z.object({
            cargoId: z.number(),
            tipo: z.string()
        })
    });

    const { userId, nome, email, senha, cargo } = registerBodySchema.parse(request.body);

    const createUsuarioUseCase = makeCreateUsuarioUseCase();

    const usuario = await createUsuarioUseCase.handler({
        nome,
        email,
        senha,
        cargo,
        dtCriacao: new Date(),
        dtAtualizacao: new Date()
    });
    
    return reply.status(201).send(usuario);
}