
import { FastifyInstance } from "fastify";
import { findAllUsuario, findUsuario, createUsuario, updateUsuario, deleteUsuario } from "./usuarioController";

//TODO: Alterar o uso do Fastify para o uso do Express

export async function usuarioRoutes(app: FastifyInstance) {
    app.get('/usuario', findAllUsuario);
    app.get('/usuario/:userId', findUsuario);
    app.post('/usuario', createUsuario);
    app.put('/usuario/:userId', updateUsuario);
    app.delete('/usuario/:userId', deleteUsuario);
}