import { PostRepository } from "../../../infra/repositories/post.repository";
import { FindAllPostUseCase } from "../find-all-post";

export function makeFindAllPostUseCase() {
    const postRepository = new PostRepository();

    const findAllPostUseCase = new FindAllPostUseCase(postRepository);

    return findAllPostUseCase;
}