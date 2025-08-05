import { IUsuario } from "../../../domain/entities/models/usuario.interface";

export interface IUsuarioRepository {
    create(usuario: IUsuario): Promise<IUsuario>;
}