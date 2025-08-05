import { IPostRepository } from "../../infra/repositories/interfaces/post.repository.interface";

export class FindAllPostUseCase {
    constructor(private postRepository: IPostRepository) {}

    async handler(page: number, limit: number){
        return this.postRepository.findAll(page, limit); 
    }

}