/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarrinhoDTO } from './carrinho.dto';
import { Carrinho, CarrinhoDocument } from './carrinho.schema';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectModel(Carrinho.name) private carrinhoModel: Model<CarrinhoDocument>,
  ) { }

  async adicionarAoCarrinho(carrinhoDTO: CarrinhoDTO): Promise<Carrinho> {
    const carrinho = new this.carrinhoModel(carrinhoDTO);
    return carrinho.save();
  }

  async obterCarrinhoDoUsuario(usuarioId: string): Promise<Carrinho[]> {
    return this.carrinhoModel.find({ usuarioId: usuarioId }).exec();
  }

  async removerDoCarrinho(carrinhoId: string): Promise<void> {
    await this.carrinhoModel.findByIdAndRemove(carrinhoId).exec();
  }
}
