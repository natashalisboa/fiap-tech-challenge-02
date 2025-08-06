import { Request, Response } from "express";
import { z } from "zod";
import { makeFindAllPostUseCase } from "../../../application/use-cases/factory/make-find-all-post-use-case";
import { makeFindPostUseCase } from "../../../application/use-cases/factory/make-find-post-use-case";
import { makeCreatePostUseCase } from "../../../application/use-cases/factory/make-create-post-use-case";
import { makeUpdatePostUseCase } from "../../../application/use-cases/factory/make-update-post-use-case";
import { makeDeletePostUseCase } from "../../../application/use-cases/factory/make-delete-post-use-case";
import { makeSearchPostUseCase } from "../../../application/use-cases/factory/make-search-post-use-case";

export async function findAllPost(req: Request, res: Response) {
    const registerBodySchema = z.object({
        page: z.coerce.number().default(1),
        limit: z.coerce.number().default(10)
    });

    const { page, limit } = registerBodySchema.parse(req.query);

    const findAllPostUseCase = makeFindAllPostUseCase();

    const post = await findAllPostUseCase.handler(page, limit);
    
    return res.status(200).send(post);
}

export async function findPost(req: Request, res: Response) {
    const registerParamsSchema = z.object({
        postId: z.coerce.number()
    });

    const { postId } = registerParamsSchema.parse(req.params);

    const findPostUseCase = makeFindPostUseCase();

    const post = await findPostUseCase.handler(postId);

    return res.status(200).send(post);
}

export async function searchPost(req: Request, res: Response) {
    const registerParamsSchema = z.object({
        search: z.string()
    });

    const { search } = registerParamsSchema.parse(req.params);

    const searchPostUseCase = makeSearchPostUseCase();

    const post = await searchPostUseCase.handler(search);

    return res.status(200).send(post);
}

export async function createPost(req: Request, res: Response) {
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

    const { postId, titulo, conteudo, disciplinaId, autorId } = registerBodySchema.parse(req.body);
    
    const createPostUseCase = makeCreatePostUseCase();

    const post = await createPostUseCase.handler({
        titulo,
        conteudo,
        disciplinaId,
        autorId,
        dtCriacao: new Date(),
        dtAtualizacao: new Date()
    });
    
    return res.status(201).send(post);
}

export async function updatePost(req: Request, res: Response) {
    const registerParamsSchema = z.object({
        postId: z.coerce.number()
    });

    const { postId } = registerParamsSchema.parse(req.params);
    
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

    const { titulo, conteudo, disciplinaId, autorId } = registerBodySchema.parse(req.body);

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


    return res.status(200).send(post);
}


export async function deletePost(req: Request, res: Response) {
    const registerParamsSchema = z.object({
        postId: z.coerce.number()
    });

    const { postId } = registerParamsSchema.parse(req.params);

    const deletePostUseCase = makeDeletePostUseCase();

    await deletePostUseCase.handler(postId);

    return res.status(204).send();
}