import { Like, Repository } from "typeorm";
import { IPostRepository } from "./interfaces/post.repository.interface";
import { Post } from "../../domain/entities/post.entity";
import { appDataSource } from "../../lib/typeorm";
import { IPost } from "../../domain/entities/models/post.interface";

export class PostRepository implements IPostRepository {
    private repository: Repository<Post>;

    constructor(){
        this.repository = appDataSource.getRepository(Post);
    } 

    async findAll(page: number, limit: number): Promise<IPost[]> {
        return this.repository.find({
            skip: (page - 1) * limit,
            take: limit,
            relations: ['disciplina', 'autor', 'comentarios' ]
        });
    }

    async findById(postId: number): Promise<IPost | null> {
        return this.repository.findOne({
            where: { postId },
            relations: ['disciplina', 'autor', 'comentarios' ]
        });
    }

    async findByTituloOrConteudo(search: string): Promise<IPost[] | null> {
        return this.repository.find({
            where: [
                { titulo: Like(`%${search}%`) },
                { conteudo: Like(`%${search}%`) }
            ],
            relations: ['disciplina', 'autor', 'comentarios' ]
        });
    }

    async create(post: IPost): Promise<IPost> {
        return this.repository.save(post);
    }

    async update(post: IPost): Promise<IPost> {
        return this.repository.save(post);
    }

    async delete(postId: number): Promise<void> {
        await this.repository.delete(postId);
    }

}

    