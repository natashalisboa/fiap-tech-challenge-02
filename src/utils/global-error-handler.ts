import { Request, Response } from "express";
import { ZodError } from "zod";

interface ErrorHandlerMap {
    [key: string]: (
        error: Error | ZodError,
        req: Request,
        res: Response
    ) => void;
}

export const errorHandlerMap: ErrorHandlerMap = {
    ZodError: (error, _, reply) => {
        return reply.status(400).send({
            message: "Erro de validação",
            ...(error instanceof ZodError && { errors: error.format() }),
        });
    },
    ResourceNotFoundError: (error, _, reply) => {
        return reply.status(404).send({
            message: error.message
        });
    },
    InvalidCredentialsError: (error, _, reply) => {
        return reply.status(404).send({
            message: error.message
        });
    }
};

export async function globalErrorHandler(
    error: Error | ZodError,
    req: Request,
    res: Response
) {
    const errorType = error.name || "UnknownError";
    const handler = errorHandlerMap[errorType];

    if (handler) {
        return handler(error, req, res);
    }

    console.error("Unhandled error:", error);
    return res.status(500).send({
        message: "Internal server error",
        details: error.message
    });
}
            