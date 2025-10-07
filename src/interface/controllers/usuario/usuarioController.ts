import { Request, Response } from "express";
import { z } from "zod";
import { makeCreateUsuarioUseCase } from "../../../application/use-cases/factory/make-create-usuario-use-case";
import { makeFindAllUsuarioUseCase } from "../../../application/use-cases/factory/make-find-all-usuario-use-case";
import { makeFindUsuarioUseCase } from "../../../application/use-cases/factory/make-find-usuario-use-case";
import { makeUpdateUsuarioUseCase } from "../../../application/use-cases/factory/make-update-usuario-use-case";
import { makeDeleteUsuarioUseCase } from "../../../application/use-cases/factory/make-delete-usuario-use-case";
import { compare, hash } from "bcryptjs";
import { makeSigninUseCase } from "../../../application/use-cases/factory/make-signin-use-case";
import { InvalidCredentialsError } from "../../../application/use-cases/errors/invalid-credentials-error";
import jwt from "jsonwebtoken";
import { env } from "../../../env";

export async function signin(req: Request, res: Response) {
    try {
        const registerBodySchema = z.object({
            email: z.string(),
            senha: z.string()
        });
        const { email, senha } = registerBodySchema.parse(req.body);

        const signinUseCase = makeSigninUseCase();

        const usuario = await signinUseCase.handler(email);

        const doestPasswordMatch = await compare(senha, usuario.senha);

        const adminPermission = usuario.cargo.cargoId === 1;

        if (!doestPasswordMatch) {
            throw new InvalidCredentialsError();
        }

        const token = jwt.sign(
        { userId: usuario.userId, email: usuario.email },
        env.JWT_SECRET as string,
        { expiresIn: "10m" }
        );

        return res.status(200).json({ token, adminPermission });
    } catch (error) {
        if (error instanceof InvalidCredentialsError) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.status(400).json({ message: "Erro ao autenticar", error: error instanceof Error ? error.message : error });
  }
}


export async function findAllUsuario(req: Request, res: Response) {
    const registerBodySchema = z.object({
        page: z.coerce.number().default(1),
        limit: z.coerce.number().default(10)
    });

    const { page, limit } = registerBodySchema.parse(req.query);

    const findAllUsuarioUseCase = makeFindAllUsuarioUseCase();

    const usuarios = await findAllUsuarioUseCase.handler(page, limit);
    
    return res.status(200).send(usuarios);
}

export async function findUsuario(req: Request, res: Response) {
    const registerParamsSchema = z.object({
        userId: z.coerce.number()
    });

    const { userId } = registerParamsSchema.parse(req.params);

    const findUsuarioUseCase = makeFindUsuarioUseCase();

    const usuario = await findUsuarioUseCase.handler(userId);

    return res.status(200).send(usuario);
}

export async function createUsuario(req: Request, res: Response) {
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

    const { userId, nome, email, senha, cargo } = registerBodySchema.parse(req.body);

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
    
    return res.status(201).send(usuario);
}

export async function updateUsuario(req: Request, res: Response) {
    const registerParamsSchema = z.object({
        userId: z.coerce.number()
    });

    const { userId } = registerParamsSchema.parse(req.params);
    
    const registerBodySchema = z.object({
        nome: z.string(),
        email: z.string(),
        senha: z.string(),
        cargo: z.object({
            cargoId: z.coerce.number(),
            tipo: z.string()
        })
    });

    const { nome, email, senha, cargo } = registerBodySchema.parse(req.body);

    const updateUsuarioUseCase = makeUpdateUsuarioUseCase();
    const usuario = await updateUsuarioUseCase.handler({
        userId,
        nome,
        email,
        senha,
        cargo,
        dtAtualizacao: new Date()
    });


    return res.status(200).send(usuario);
}


export async function deleteUsuario(req: Request, res: Response) {
    const registerParamsSchema = z.object({
        userId: z.coerce.number()
    });

    const { userId } = registerParamsSchema.parse(req.params);

    const deleteUsuarioUseCase = makeDeleteUsuarioUseCase();

    await deleteUsuarioUseCase.handler(userId);

    return res.status(204).send();
}