import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';


export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  dataCriacao: Date;
}

@Schema({ collection: 'produtos' })
export class Produto {
  @Prop({ required: true, unique: true, index: true })
  id: string

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  preco: number;

  @Prop({ required: true })
  descricao: string;
}

export type ProdutoDocument = Produto & Document;
export const ProdutoSchema = SchemaFactory.createForClass(Produto);


export const ProdutoModel = model<ProdutoDocument>('Produto', ProdutoSchema);
