import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosController } from './produtos.controller';
import { ProdutoModel, ProdutoSchema } from './produtos.schema';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProdutoModel.name, schema: ProdutoSchema }])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule { }
