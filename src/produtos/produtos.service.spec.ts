import { NotFoundException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Produto } from './produtos.schema';
import { ProdutosService } from './produtos.service';

describe('ProdutosService unit test', () => {
  let service: ProdutosService;
  let mockProdutoModel: Model<Produto>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProdutosService,
        {
          provide: getModelToken(Produto.name),
          useValue: {
            find: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue([]),
            findById: jest.fn().mockReturnThis(),
            create: jest.fn(), // Mocking the create function
          },
        },
      ],
    }).compile();

    service = module.get<ProdutosService>(ProdutosService);
    mockProdutoModel = module.get<Model<Produto>>(getModelToken(Produto.name));
  });
  it('deve chamar o método find() ao chamar obterTodos()', async () => {
    const mockProdutos = [
      { _id: '1', nome: 'Produto 1' },
      { _id: '2', nome: 'Produto 2' },
    ];
    const execMock = mockProdutoModel.find().exec as jest.Mock;
    execMock.mockResolvedValue(mockProdutos);

    const result = await service.obterTodos();

    expect(mockProdutoModel.find).toHaveBeenCalled();
    expect(execMock).toHaveBeenCalled();
    expect(result).toEqual(mockProdutos);
  });

  it('deve chamar o método findById() ao chamar obterPorId()', async () => {
    const mockProduto = { _id: '1', nome: 'Produto 1' };
    const execMock = jest.fn().mockResolvedValue(mockProduto);
    (mockProdutoModel.findById as jest.Mock).mockReturnValue({ exec: execMock });

    const result = await service.obterPorId('1');

    expect(mockProdutoModel.findById).toHaveBeenCalledWith('1');
    expect(execMock).toHaveBeenCalled();
    expect(result).toEqual(mockProduto);
  });

  it('deve lançar NotFoundException ao chamar obterPorId() com um ID inválido', async () => {

    const invalidId = 'id_invalido';
    const execMock = jest.fn().mockResolvedValue(null);
    (mockProdutoModel.findById as jest.Mock).mockReturnValue({ exec: execMock });

    await expect(service.obterPorId(invalidId)).rejects.toThrowError(NotFoundException);
  });

  it('deve chamar o método create() ao chamar adicionar()', async () => {
    const produtoMock = { nome: 'Produto Teste' };
    const novoProdutoMock = { ...produtoMock, _id: '1' }; // Incluindo um ID mockado para simular o novo produto criado
    (mockProdutoModel.create as jest.Mock).mockResolvedValue(novoProdutoMock);

    const result = await service.adicionar(produtoMock as Produto);

    expect(mockProdutoModel.create).toHaveBeenCalledWith(produtoMock);
    expect(result).toEqual(novoProdutoMock);
  });
});
