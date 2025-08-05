import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFindAllPostUseCase } from "../../../application/use-cases/factory/make-find-all-post-use-case";
import { makeFindPostUseCase } from "../../../application/use-cases/factory/make-find-post-use-case";
import { makeCreatePostUseCase } from "../../../application/use-cases/factory/make-create-post-use-case";
import { makeUpdatePostUseCase } from "../../../application/use-cases/factory/make-update-post-use-case";
import { makeDeletePostUseCase } from "../../../application/use-cases/factory/make-delete-post-use-case";


//TODO: Alterar o uso do Fastify para o uso do Express
export async function findAllPost(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema = z.object({
        page: z.coerce.number().default(1),
        limit: z.coerce.number().default(10)
    });

    const { page, limit } = registerBodySchema.parse(request.query);

    const findAllPostUseCase = makeFindAllPostUseCase();

    const post = await findAllPostUseCase.handler(page, limit);
    
    return reply.status(200).send(post);
}

export async function findPost(request: FastifyRequest, reply: FastifyReply){
    const registerParamsSchema = z.object({
        postId: z.coerce.number()
    });

    const { postId } = registerParamsSchema.parse(request.params);

    const findPostUseCase = makeFindPostUseCase();

    const post = await findPostUseCase.handler(postId);

    return reply.status(200).send(post);
}

export async function createPost(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema = z.object({
        postId: z.string().optional(),
        titulo: z.string(),
        conteudo: z.string(),
        disciplinaId: z.object({
            disciplinaId: z.coerce.number(),
            nome: z.string()
        }),
        autorId: z.object({
            userId: z.coerce.number(),
            nome: z.string(),
            email: z.string(), 
            senha: z.string(), 
            cargo: z.object({
                cargoId: z.coerce.number(),
                tipo: z.string()
            })
        })
    });

    const { postId, titulo, conteudo, disciplinaId, autorId } = registerBodySchema.parse(request.body);
    
    const createPostUseCase = makeCreatePostUseCase();

    const post = await createPostUseCase.handler({
        titulo,
        conteudo,
        disciplinaId,
        autorId,
        dtCriacao: new Date(),
        dtAtualizacao: new Date()
    });
    
    return reply.status(201).send(post);
}

export async function updatePost(request: FastifyRequest, reply: FastifyReply){
    const registerParamsSchema = z.object({
        postId: z.coerce.number()
    });

    const { postId } = registerParamsSchema.parse(request.params);
    
    const registerBodySchema = z.object({
        titulo: z.string(),
        conteudo: z.string(),
        disciplinaId: z.object({
            disciplinaId: z.coerce.number(),
            nome: z.string()
        }),
        autorId: z.object({
            userId: z.coerce.number(),
            nome: z.string(),
            email: z.string(), 
            senha: z.string(), 
            cargo: z.object({
                cargoId: z.coerce.number(),
                tipo: z.string()
            })
        })
    });

    const { titulo, conteudo, disciplinaId, autorId } = registerBodySchema.parse(request.body);

    const updatePostUseCase = makeUpdatePostUseCase();

    const post = await updatePostUseCase.handler({
        postId,
        titulo,
        conteudo,
        disciplinaId,
        autorId,
        dtAtualizacao: new Date(),
        dtCriacao: new Date()
    });


    return reply.status(200).send(post);
}


export async function deletePost(request: FastifyRequest, reply: FastifyReply){
    const registerParamsSchema = z.object({
        postId: z.coerce.number()
    });

    const { postId } = registerParamsSchema.parse(request.params);

    const deletePostUseCase = makeDeletePostUseCase();

    await deletePostUseCase.handler(postId);

    return reply.status(204).send();
}