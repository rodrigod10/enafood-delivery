import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ProdutoDTO } from './produto.dto';
import { Produto } from './produtos.schema';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) { }

  @Get()
  async obterTodos(): Promise<Produto[]> {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string): Promise<Produto> {
    const produto = await this.produtosService.obterPorId(id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  @Post()
  async adicionar(@Body() produtoDTO: ProdutoDTO): Promise<Produto> {
    return this.produtosService.adicionar(produtoDTO);
  }

  @Put(':id')
  async editar(@Param('id') id: string, @Body() produtoDTO: ProdutoDTO): Promise<Produto> {
    return this.produtosService.editar(id, produtoDTO);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<void> {
    return this.produtosService.remover(id);
  }
}
