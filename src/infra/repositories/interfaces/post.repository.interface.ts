import { IPost } from "../../../domain/entities/models/post.interface";

export interface IPostRepository {
    findAll(page: number, limit: number): Promise<IPost[]>;
    findById(postId: number): Promise<IPost | null>;
    findByTituloOrConteudo(search: string): Promise<IPost[] | null>;
    create(post: IPost): Promise<IPost>;
    update(post: IPost): Promise<IPost>;
    delete(postId: number): Promise<void>;
}