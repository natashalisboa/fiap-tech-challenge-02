import { IPost } from "../../domain/entities/models/post.interface";
import { IPostRepository } from "../../infra/repositories/interfaces/post.repository.interface";

export class UpdatePostUseCase {
    constructor(private postRepository: IPostRepository) {}

    async handler(post: IPost){

        return this.postRepository.update(post); 

    }

}