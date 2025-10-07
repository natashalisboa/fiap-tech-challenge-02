import express from 'express';
import "reflect-metadata";
import "./lib/typeorm"
import { usuarioRoutes } from "./interface/controllers/usuario/routes";
import { env } from "./env";
import { jwtValidate } from "./interface/middleware/jwt-validate";
import { postRoutes } from "./interface/controllers/post/routes";
import { comentarioRoutes } from './interface/controllers/comentario/routes';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(jwtValidate);

app.use('/usuario', usuarioRoutes);
app.use('/posts', postRoutes);
app.use('/comentarios', comentarioRoutes);

