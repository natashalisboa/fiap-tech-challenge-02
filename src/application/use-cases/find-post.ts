import { IPostRepository } from "../../infra/repositories/interfaces/post.repository.interface";

export class FindPostUseCase {
    constructor(private postRepository: IPostRepository) {}

    async handler(id: number){

        const post = await this.postRepository.findById(id);
        
        if (!post) throw new Error("Post não encontrado");

        return this.postRepository.findById(id);
    }

}