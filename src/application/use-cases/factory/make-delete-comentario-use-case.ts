import { ComentarioRepository } from "../../../infra/repositories/comentario.repository";
import { DeleteComentarioUseCase } from "../delete-comentario";


export function makeDeleteComentarioUseCase() {
    const comentarioRepository = new ComentarioRepository();

    const deleteComentarioUseCase = new DeleteComentarioUseCase(comentarioRepository);

    return deleteComentarioUseCase;
}