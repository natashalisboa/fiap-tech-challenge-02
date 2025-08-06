import { Router } from "express";
import { findAllUsuario, findUsuario, createUsuario, updateUsuario, deleteUsuario, signin } from "./usuarioController";

const router = Router();

router.post('/signin', signin);
router.get('/', findAllUsuario);
router.get('/:userId', findUsuario);
router.post('/', createUsuario);
router.put('/:userId', updateUsuario);
router.delete('/:userId', deleteUsuario);

export { router as usuarioRoutes };
