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

    async findAll(page: number, limit: number): Promise<IUsuario[]> {
        return this.repository.find({
            skip: (page - 1) * limit,
            take: limit
        });
    }

    async findById(userId: number): Promise<IUsuario | null> {
        return this.repository.findOne({
            where: { userId }
        });
    }

    async findByEmail(email: string): Promise<IUsuario | null> {
        return this.repository.findOne({
            where: { email },
        relations: ['cargo']
        });
    }

    async create(usuario: IUsuario): Promise<IUsuario> {
        return this.repository.save(usuario);
    }

    async update(usuario: IUsuario): Promise<IUsuario> {
        return this.repository.save(usuario);
    }
    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
    

}