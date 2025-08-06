import { IPostRepository } from "../../infra/repositories/interfaces/post.repository.interface";

export class FindPostUseCase {
    constructor(private postRepository: IPostRepository) {}

    async handler(postId: number){

        const post = await this.postRepository.findById(postId);
        
        if (!post) throw new Error("Post não encontrado");

        return this.postRepository.findById(postId);
    }

}