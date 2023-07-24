import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';

@Schema()
export class Carrinho {
  @Prop({ required: true, unique: true })
  usuarioId: string;

  @Prop({ required: true })
  produtoId: string;

  @Prop({ required: true })
  quantidade: number;
}

export type CarrinhoDocument = Carrinho & Document;
export const CarrinhoSchema = SchemaFactory.createForClass(Carrinho);

export const CarrinhoModel = model<CarrinhoDocument>(
  'carrinho',
  CarrinhoSchema,
);
