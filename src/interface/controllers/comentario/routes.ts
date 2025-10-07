import { Router } from "express";
import { createComentario, deleteComentario, findComentario, updateComentario } from "./comentarioController";

const router = Router();

router.get('/:postId', findComentario);
router.post('/', createComentario);
router.put('/:comentarioId', updateComentario);
router.delete('/:comentarioId', deleteComentario);

export { router as comentarioRoutes };
