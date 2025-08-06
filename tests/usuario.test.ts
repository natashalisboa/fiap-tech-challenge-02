jest.mock('../src/lib/typeorm');
jest.mock('../src/infra/repositories/usuario.repository');

import { UsuarioRepository } from '../src/infra/repositories/usuario.repository';
import { IUsuario } from '../src/domain/entities/models/usuario.interface';

describe('UsuarioRepository', () => {
  let usuarioRepository: UsuarioRepository;
  const mockUsuario: IUsuario = {
    userId: 1,
    nome: 'Usuário Teste',
    email: 'usuario@email.com',
    senha: 'senha123',
    cargo: { cargoId: 1, tipo: 'Admin' },
    dtCriacao: new Date(),
    dtAtualizacao: new Date(),
  };

  beforeEach(() => {
    usuarioRepository = new UsuarioRepository();
    jest.clearAllMocks();
  });

  it('deve criar um usuário', async () => {
    (usuarioRepository.create as jest.Mock).mockResolvedValue(mockUsuario);
    const result = await usuarioRepository.create(mockUsuario);
    expect(result).toEqual(mockUsuario);
  });

  it('deve buscar todos os usuários', async () => {
    (usuarioRepository.findAll as jest.Mock).mockResolvedValue([mockUsuario]);
    const result = await usuarioRepository.findAll(1, 10);
    expect(result).toEqual([mockUsuario]);
  });

  it('deve buscar um usuário por ID', async () => {
    (usuarioRepository.findById as jest.Mock).mockResolvedValue(mockUsuario);
    const result = await usuarioRepository.findById(1);
    expect(result).toEqual(mockUsuario);
  });

  it('deve buscar um usuário por email', async () => {
    (usuarioRepository.findByEmail as jest.Mock).mockResolvedValue(mockUsuario);
    const result = await usuarioRepository.findByEmail('usuario@email.com');
    expect(result).toEqual(mockUsuario);
  });

  it('deve atualizar um usuário', async () => {
    (usuarioRepository.update as jest.Mock).mockResolvedValue(mockUsuario);
    const result = await usuarioRepository.update(mockUsuario);
    expect(result).toEqual(mockUsuario);
  });

  it('deve deletar um usuário', async () => {
    (usuarioRepository.delete as jest.Mock).mockResolvedValue(true);
    const result = await usuarioRepository.delete(1);
    expect(result).toBe(true);
  });
});

afterAll(async () => {
  const { appDataSource } = require('../src/lib/typeorm');
  if (appDataSource && appDataSource.isInitialized) {
    await appDataSource.destroy();
  }
});