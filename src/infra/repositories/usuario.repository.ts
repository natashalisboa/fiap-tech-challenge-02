import { Repository } from "typeorm";
import { IUsuario } from "../../domain/entities/models/usuario.interface";
import { IUsuarioRepository } from "./interfaces/usuario.repository.interface";
import { Usuario } from "../../domain/entities/usuario.entity";
import { appDataSource } from "../../lib/typeorm";

export class UsuarioRepository implements IUsuarioRepository {
    private repository: Repository<Usuario>;

    constructor(){
        this.repository = appDataSource.getRepository(Usuario);
    }
    
    create(usuario: IUsuario): Promise<IUsuario> {
        return this.repository.save(usuario);
    }
}