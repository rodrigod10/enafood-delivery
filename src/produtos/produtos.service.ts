import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProdutoDTO } from './produto.dto';
import { Produto, ProdutoDocument, ProdutoModel } from './produtos.schema';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(ProdutoModel.name) private produtoModel: Model<ProdutoDocument>) { }

  async obterTodos(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }

  async obterPorId(id: string): Promise<Produto> {
    const produto = await this.produtoModel.findOne({ id }).exec();
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  async adicionar(produtoDTO: ProdutoDTO): Promise<Produto> {
    const id = produtoDTO.nome + '-' + Math.floor(Math.random() * 10000);

    const produtoCriado = new this.produtoModel({
      id,
      dataCriacao: new Date(),
      ...produtoDTO,
    });

    return produtoCriado.save();
  }

  async editar(id: string, produtoDTO: ProdutoDTO): Promise<Produto> {
    const produtoExistente = await this.produtoModel.findOne({ id }).exec();
    if (!produtoExistente) {
      throw new NotFoundException('Produto não encontrado');
    }

    produtoExistente.nome = produtoDTO.nome;
    produtoExistente.preco = produtoDTO.preco;
    produtoExistente.descricao = produtoDTO.descricao;

    return produtoExistente.save();
  }

  async remover(id: string): Promise<void> {
    const produtoExistente = await this.produtoModel.findOne({ id }).exec();
    if (!produtoExistente) {
      throw new NotFoundException('Produto não encontrado');
    }

    await this.produtoModel.deleteOne({ id }).exec();
  }
}
