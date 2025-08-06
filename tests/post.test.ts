jest.mock('../src/lib/typeorm');
jest.mock('../src/infra/repositories/post.repository');

import { PostRepository } from '../src/infra/repositories/post.repository';
import { IPost } from '../src/domain/entities/models/post.interface';

describe('PostRepository', () => {
  let postRepository: PostRepository;
  const mockPost: IPost = {
    postId: 1,
    titulo: 'Título Teste',
    conteudo: 'Conteúdo Teste',
    disciplinaId: { disciplinaId: 1, nome: 'Disciplina' },
    autorId: { userId: 1, nome: 'User', email: 'user@email.com', senha: '123', cargo: { cargoId: 1, tipo: 'Admin' }, dtCriacao: new Date(), dtAtualizacao: new Date() },
    dtCriacao: new Date(),
    dtAtualizacao: new Date(),
  };

  beforeEach(() => {
    postRepository = new PostRepository();
    jest.clearAllMocks();
  });

  it('deve criar um post', async () => {
    (postRepository.create as jest.Mock).mockResolvedValue(mockPost);
    const result = await postRepository.create(mockPost);
    expect(result).toEqual(mockPost);
  });

  it('deve buscar todos os posts', async () => {
    (postRepository.findAll as jest.Mock).mockResolvedValue([mockPost]);
    const result = await postRepository.findAll(1, 10);
    expect(result).toEqual([mockPost]);
  });

  it('deve buscar um post por ID', async () => {
    (postRepository.findById as jest.Mock).mockResolvedValue(mockPost);
    const result = await postRepository.findById(1);
    expect(result).toEqual(mockPost);
  });

  it('deve buscar posts por título ou conteúdo', async () => {
    (postRepository.findByTituloOrConteudo as jest.Mock).mockResolvedValue([mockPost]);
    const result = await postRepository.findByTituloOrConteudo('Teste');
    expect(result).toEqual([mockPost]);
  });

  it('deve atualizar um post', async () => {
    (postRepository.update as jest.Mock).mockResolvedValue(mockPost);
    const result = await postRepository.update(mockPost);
    expect(result).toEqual(mockPost);
  });

  it('deve deletar um post', async () => {
    (postRepository.delete as jest.Mock).mockResolvedValue(true);
    const result = await postRepository.delete(1);
    expect(result).toBe(true);
  });
});

afterAll(async () => {
  const { appDataSource } = require('../src/lib/typeorm');
  if (appDataSource && appDataSource.isInitialized) {
    await appDataSource.destroy();
  }
});