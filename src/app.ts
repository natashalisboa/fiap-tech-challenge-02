import "reflect-metadata";
import "./lib/typeorm"
import fastify from "fastify";
import { usuarioRoutes } from "./interface/controllers/usuario/routes";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import { jwtValidate } from "./interface/middleware/jwt-validate";
import { postRoutes } from "./interface/controllers/post/routes";

export const app = fastify({ logger: true });

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    sign: { expiresIn: '10m' }
})

app.addHook('onRequest', jwtValidate);

app.register(usuarioRoutes);
app.register(postRoutes);

