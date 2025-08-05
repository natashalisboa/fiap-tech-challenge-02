import { UsuarioRepository } from "../../../infra/repositories/usuario.repository";
import { CreateUsuarioUseCase } from "../create-usuario";

export function makeCreateUsuarioUseCase() {
    const usuarioRepository = new UsuarioRepository();
    const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository);

    return createUsuarioUseCase;
}