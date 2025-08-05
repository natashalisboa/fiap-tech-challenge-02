import { IPostRepository } from "../../infra/repositories/interfaces/post.repository.interface";

export class DeletePostUseCase {
    constructor(private postRepository: IPostRepository) {}

    async handler(postId: number){

        return this.postRepository.delete(postId); 

    }

}