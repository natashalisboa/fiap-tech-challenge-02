import { Router } from "express";
import { createPost, deletePost, findAllPost, findPost, updatePost, searchPost } from "./postController";

const router = Router();

router.get('/', findAllPost);
router.get('/:postId', findPost);
router.get('/search/:search', searchPost);
router.post('/', createPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

export { router as postRoutes };
