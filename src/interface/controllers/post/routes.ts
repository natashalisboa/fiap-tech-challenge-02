
import { FastifyInstance } from "fastify";
import { createPost, deletePost, findAllPost, findPost, updatePost } from "./postController";

//TODO: Alterar o uso do Fastify para o uso do Express

export async function postRoutes(app: FastifyInstance) {
    app.get('/posts', findAllPost);
    app.get('/posts/:postId', findPost);
    app.post('/posts', createPost);
    app.put('/posts/:postId', updatePost);
    app.delete('/posts/:postId', deletePost);
}