import { IPost } from "../../domain/entities/models/post.interface";
import { IPostRepository } from "../../infra/repositories/interfaces/post.repository.interface";

export class CreatePostUseCase {
    constructor(private postRepository: IPostRepository) {}

    async handler(post: IPost): Promise<IPost> {
        return this.postRepository.create(post);
    }

}