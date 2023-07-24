/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarrinhoDTO } from './carrinho.dto';
import { Carrinho } from './carrinho.schema';
import { CarrinhoService } from './carrinho.service';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) { }

  @Post()
  async adicionarAoCarrinho(
    @Body() carrinhoDTO: CarrinhoDTO,
  ): Promise<Carrinho> {
    return this.carrinhoService.adicionarAoCarrinho(carrinhoDTO);
  }

  @Get(':usuarioId')
  async obterCarrinhoDoUsuario(
    @Param('usuarioId') usuarioId: string,
  ): Promise<Carrinho[]> {
    return this.carrinhoService.obterCarrinhoDoUsuario(usuarioId);
  }

  @Delete(':carrinhoId')
  async removerDoCarrinho(
    @Param('carrinhoId') carrinhoId: string,
  ): Promise<void> {
    return this.carrinhoService.removerDoCarrinho(carrinhoId);
  }
}
