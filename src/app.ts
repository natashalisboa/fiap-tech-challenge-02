import "reflect-metadata";
import fastify from "fastify";
import { usuarioRoutes } from "./interface/controllers/routes";

//TODO: Alterar o uso do Fastify para o uso do Express

export const app = fastify();

app.register(usuarioRoutes);

