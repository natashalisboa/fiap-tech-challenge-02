import { Usuario } from "../../domain/entities/usuario.entity";
import { UsuarioRepository } from "../../infra/repositories/usuario.repository";

export class CreateUsuario {
    constructor(private usuarioRepository: UsuarioRepository) {}

    createUsuario(usuario: Usuario){
        return this.usuarioRepository.create(usuario);
    }

}