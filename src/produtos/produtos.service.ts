import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto, ProdutoDocument } from './produtos.schema';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produto.name) private produtoModel: Model<ProdutoDocument>) { }

  async obterTodos(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }

  async obterPorId(id: string): Promise<Produto> {
    const produto = await this.produtoModel.findById(id).exec();
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  async adicionar(produto: Produto): Promise<Produto> {
    const novoProduto = new this.produtoModel(produto);
    return novoProduto.save();
  }

  async editar(id: string, produto: Produto): Promise<Produto> {
    const produtoExistente = await this.produtoModel.findById(id).exec();
    if (!produtoExistente) {
      throw new NotFoundException('Produto não encontrado');
    }
    return this.produtoModel.findByIdAndUpdate(id, produto, { new: true }).exec();
  }

  async remover(id: string): Promise<void> {
    const produtoExistente = await this.produtoModel.findById(id).exec();
    if (!produtoExistente) {
      throw new NotFoundException('Produto não encontrado');
    }
    await this.produtoModel.findByIdAndRemove(id).exec();
  }
}
