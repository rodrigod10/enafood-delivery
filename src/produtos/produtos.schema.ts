import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProdutoDocument = Produto & Document;

@Schema()
export class Produto {
  @Prop()
  nome: string;

  @Prop()
  descricao: string;

  @Prop()
  preco: number;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
