
import { FastifyInstance } from "fastify";
import { create } from "./usuarioController";

//TODO: Alterar o uso do Fastify para o uso do Express

export async function usuarioRoutes(app: FastifyInstance) {
    app.post('/usuario', create)
}