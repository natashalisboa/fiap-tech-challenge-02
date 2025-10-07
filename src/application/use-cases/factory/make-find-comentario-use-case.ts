import { ComentarioRepository } from "../../../infra/repositories/comentario.repository";
import { FindComentarioUseCase } from "../find-comentario";


export function makeFindComentarioUseCase() {
    const comentarioRepository = new ComentarioRepository();

    const findComentarioUseCase = new FindComentarioUseCase(comentarioRepository);

    return findComentarioUseCase;
}