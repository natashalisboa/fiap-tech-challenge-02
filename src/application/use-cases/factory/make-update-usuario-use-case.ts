import { UsuarioRepository } from "../../../infra/repositories/usuario.repository";
import { UpdateUsuarioUseCase } from "../update-usuario";

export function makeUpdateUsuarioUseCase() {
    const usuarioRepository = new UsuarioRepository();

    const updateUsuarioUseCase = new UpdateUsuarioUseCase(usuarioRepository);

    return updateUsuarioUseCase;
}