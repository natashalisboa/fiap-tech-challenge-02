import { UsuarioRepository } from "../../../infra/repositories/usuario.repository";
import { FindAllUsuarioUseCase } from "../find-all-usuario";

export function makeFindAllUsuarioUseCase() {
    const usuarioRepository = new UsuarioRepository();

    const findAllUsuarioUseCase = new FindAllUsuarioUseCase(usuarioRepository);

    return findAllUsuarioUseCase;
}