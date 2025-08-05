import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateUsuarioUseCase } from "../../../application/use-cases/factory/make-create-usuario-use-case";
import { makeFindAllUsuarioUseCase } from "../../../application/use-cases/factory/make-find-all-usuario-use-case";
import { makeFindUsuarioUseCase } from "../../../application/use-cases/factory/make-find-usuario-use-case";
import { makeUpdateUsuarioUseCase } from "../../../application/use-cases/factory/make-update-usuario-use-case";
import { makeDeleteUsuarioUseCase } from "../../../application/use-cases/factory/make-delete-usuario-use-case";
import { compare, hash } from "bcryptjs";
import { makeSigninUseCase } from "../../../application/use-cases/factory/make-signin-use-case";
import { InvalidCredentialsError } from "../../../application/use-cases/errors/invalid-credentials-error";


//TODO: Alterar o uso do Fastify para o uso do Express
export async function signin(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        email: z.string(),
        senha: z.string()
    });
    const { email, senha } = registerBodySchema.parse(request.body);

    const signinUseCase = makeSigninUseCase();

    const usuario = await signinUseCase.handler(email);

    const doestPasswordMatch = await compare(senha, usuario.senha);

    if (!doestPasswordMatch) {
        throw new InvalidCredentialsError();
    }

    const token = await reply.jwtSign({ });

    return reply.status(200).send({ token });
}


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

    const hashedPassword = await hash(senha, 10);
    
    const createUsuarioUseCase = makeCreateUsuarioUseCase();

    const usuario = await createUsuarioUseCase.handler({
        nome,
        email,
        senha: hashedPassword,
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