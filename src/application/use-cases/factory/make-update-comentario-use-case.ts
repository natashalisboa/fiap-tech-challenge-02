import { ComentarioRepository } from "../../../infra/repositories/comentario.repository";
import { UpdateComentarioUseCase } from "../update-comentario";


export function makeUpdateComentarioUseCase() {
    const comentarioRepository = new ComentarioRepository();

    const updateComentarioUseCase = new UpdateComentarioUseCase(comentarioRepository);

    return updateComentarioUseCase;
}