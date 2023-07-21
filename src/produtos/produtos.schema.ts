import { Document, Schema, model } from 'mongoose';

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  dataCriacao: Date;
}

export type ProdutoDocument = Produto & Document;

const produtoSchema = new Schema<ProdutoDocument>({
  id: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
}, { collection: 'produtos' });

export const ProdutoModel = model<ProdutoDocument>('Produto', produtoSchema);
