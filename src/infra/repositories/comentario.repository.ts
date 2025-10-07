import { Like, Repository } from "typeorm";
import { IPostRepository } from "./interfaces/post.repository.interface";
import { Post } from "../../domain/entities/post.entity";
import { appDataSource } from "../../lib/typeorm";
import { IPost } from "../../domain/entities/models/post.interface";
import { IComentarioRepository } from "./interfaces/comentario.repository.interface";
import { Comentario } from "../../domain/entities/comentario.entity";
import { IComentario } from "../../domain/entities/models/comentario.interface";
import { Equal } from "typeorm";

export class ComentarioRepository implements IComentarioRepository {
    private repository: Repository<Comentario>;

    constructor(){
        this.repository = appDataSource.getRepository(Comentario);
    } 

    async findById(postId: number): Promise<IComentario[] | null> {
        return this.repository.find({
            where: { post: Equal(postId) },
            relations: ['post', 'autor']
        });
    }

    async create(comentario: IComentario): Promise<IComentario> {
        return this.repository.save(comentario);
    }

    async update(comentario: IComentario): Promise<IComentario> {
        return this.repository.save(comentario);
    }

    async delete(comentarioId: number): Promise<void> {
        await this.repository.delete(comentarioId);
    }

}

    