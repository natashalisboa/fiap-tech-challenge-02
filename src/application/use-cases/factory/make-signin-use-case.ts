import { UsuarioRepository } from "../../../infra/repositories/usuario.repository";
import { SigninUseCase } from "../signin";

export function makeSigninUseCase() {
    const usuarioRepository = new UsuarioRepository();
    const signinUseCase = new SigninUseCase(usuarioRepository);

    return signinUseCase;
}