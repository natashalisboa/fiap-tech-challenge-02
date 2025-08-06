import express from 'express';
import "reflect-metadata";
import "./lib/typeorm"
import { usuarioRoutes } from "./interface/controllers/usuario/routes";
import { env } from "./env";
import { jwtValidate } from "./interface/middleware/jwt-validate";
import { postRoutes } from "./interface/controllers/post/routes";

export const app = express();

app.use(express.json());
app.use(jwtValidate);

app.use('/usuario', usuarioRoutes);
app.use('/posts', postRoutes);

