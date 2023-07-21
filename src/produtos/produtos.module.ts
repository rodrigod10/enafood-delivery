import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosController } from './produtos.controller';
import { ProdutoModel } from './produtos.schema'; // Correto: importar ProdutoModel, não ProdutoSchema
import { ProdutosService } from './produtos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProdutoModel.name, schema: ProdutoModel.schema }]),
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule { }
