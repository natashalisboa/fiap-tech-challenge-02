import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

interface ErrorHandlerMap {
    [key: string]: (
        error: Error | ZodError,
        request: FastifyRequest,
        reply: FastifyReply
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
    request: FastifyRequest,
    reply: FastifyReply
) {
    const errorType = error.name || "UnknownError";
    const handler = errorHandlerMap[errorType];

    if (handler) {
        return handler(error, request, reply);
    }

    console.error("Unhandled error:", error);
    return reply.status(500).send({
        message: "Internal server error",
        details: error.message
    });
}
            