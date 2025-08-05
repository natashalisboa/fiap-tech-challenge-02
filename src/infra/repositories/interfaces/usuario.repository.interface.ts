import { IUsuario } from "../../../domain/entities/models/usuario.interface";

export interface IUsuarioRepository {
    findAll(page: number, limit: number): Promise<IUsuario[]>;
    findById(id: number): Promise<IUsuario | null>;
    create(usuario: IUsuario): Promise<IUsuario>;
    update(usuario: IUsuario): Promise<IUsuario>;
    delete(id: number): Promise<void>;
}