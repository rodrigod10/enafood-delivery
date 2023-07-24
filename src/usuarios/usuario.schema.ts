import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';
import { Carrinho } from 'src/carrinho/carrinho.schema';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  carrinho: Carrinho[];
  dataCriacao: Date;
}

@Schema({ collection: 'usuarios' })
export class Usuario {
  @Prop({ required: true, unique: true, index: true })
  id: string;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: [] })
  carrinho: Carrinho[];

  @Prop({ default: new Date() })
  dataCriacao: Date;
}

export type UsuarioDocument = Usuario & Document;
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

export const UsuarioModel = model<UsuarioDocument>('Usuario', UsuarioSchema);
