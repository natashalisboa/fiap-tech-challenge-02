import { IPostRepository } from "../../infra/repositories/interfaces/post.repository.interface";

export class SearchPostUseCase {
    constructor(private postRepository: IPostRepository) {}

    async handler(search: string){

        return this.postRepository.findByTituloOrConteudo(search);
    }

}