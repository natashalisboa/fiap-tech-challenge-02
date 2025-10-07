import { ComentarioRepository } from "../../../infra/repositories/comentario.repository";
import { CreateComentarioUseCase } from "../create-comentario";



export function makeCreateComentarioUseCase() {
    const comentarioRepository = new ComentarioRepository();
    const createComentarioUseCase = new CreateComentarioUseCase(comentarioRepository);

    return createComentarioUseCase;
}