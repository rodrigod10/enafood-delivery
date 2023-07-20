import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriarProdutoDto, EditarProdutoDto } from "./produto.dto";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) { }

  @Get()
  async obterProdutos() {
    return await this.produtosService.obterTodos();
  }

  @Post()
  async adicionarProduto(@Body() criarProdutoDto: CriarProdutoDto) {
    return await this.produtosService.adicionar(criarProdutoDto);
  }

  @Put(':id')
  async editarProduto(@Param('id') id: string, @Body() editarProdutoDto: EditarProdutoDto) {
    return await this.produtosService.editar(id, editarProdutoDto);
  }

  @Delete(':id')
  async removerProduto(@Param('id') id: string) {
    return await this.produtosService.remover(id);
  }
}