import "reflect-metadata";
import "./lib/typeorm"
import fastify from "fastify";
import { usuarioRoutes } from "./interface/controllers/usuario/routes";

//TODO: Alterar o uso do Fastify para o uso do Express

export const app = fastify({ logger: true });

app.register(usuarioRoutes);

