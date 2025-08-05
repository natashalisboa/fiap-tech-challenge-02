import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateUsuarioUseCase } from "../../../application/use-cases/factory/make-create-usuario-use-case";
import { makeFindAllUsuarioUseCase } from "../../../application/use-cases/factory/make-find-all-usuario-use-case";
import { makeFindUsuarioUseCase } from "../../../application/use-cases/factory/make-find-usuario-use-case";
import { makeUpdateUsuarioUseCase } from "../../../application/use-cases/factory/make-update-usuario-use-case";
import { makeDeleteUsuarioUseCase } from "../../../application/use-cases/factory/make-delete-usuario-use-case";


//TODO: Alterar o uso do Fastify para o uso do Express
export async function findAllUsuario(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema = z.object({
        page: z.coerce.number().default(1),
        limit: z.coerce.number().default(10)
    });

    const { page, limit } = registerBodySchema.parse(request.query);

    const findAllUsuarioUseCase = makeFindAllUsuarioUseCase();

    const usuarios = await findAllUsuarioUseCase.handler(page, limit);
    
    return reply.status(200).send(usuarios);
}

export async function findUsuario(request: FastifyRequest, reply: FastifyReply){
    const registerParamsSchema = z.object({
        userId: z.coerce.number()
    });

    const { userId } = registerParamsSchema.parse(request.params);

    const findUsuarioUseCase = makeFindUsuarioUseCase();

    const usuario = await findUsuarioUseCase.handler(userId);

    return reply.status(200).send(usuario);
}

export async function createUsuario(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema = z.object({
        userId: z.string().optional(),
        nome: z.string(),
        email: z.string(),
        senha: z.string(),
        cargo: z.object({
            cargoId: z.coerce.number(),
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

export async function updateUsuario(request: FastifyRequest, reply: FastifyReply){
    const registerParamsSchema = z.object({
        userId: z.coerce.number()
    });

    const { userId } = registerParamsSchema.parse(request.params);
    
    const registerBodySchema = z.object({
        nome: z.string(),
        email: z.string(),
        senha: z.string(),
        cargo: z.object({
            cargoId: z.coerce.number(),
            tipo: z.string()
        })
    });

    const { nome, email, senha, cargo } = registerBodySchema.parse(request.body);

    const updateUsuarioUseCase = makeUpdateUsuarioUseCase();
    const usuario = await updateUsuarioUseCase.handler({
        userId,
        nome,
        email,
        senha,
        cargo,
        dtAtualizacao: new Date()
    });


    return reply.status(200).send(usuario);
}


export async function deleteUsuario(request: FastifyRequest, reply: FastifyReply){
    const registerParamsSchema = z.object({
        userId: z.coerce.number()
    });

    const { userId } = registerParamsSchema.parse(request.params);

    const deleteUsuarioUseCase = makeDeleteUsuarioUseCase();

    await deleteUsuarioUseCase.handler(userId);

    return reply.status(204).send();
}