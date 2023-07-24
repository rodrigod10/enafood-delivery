import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioDTO } from './usuario.dto';
import { Usuario, UsuarioDocument } from './usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) { }

  async obterTodos(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async obterPorId(id: string): Promise<Usuario> {
    const usuario = await this.usuarioModel.findOne({ id }).exec();
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }

  async adicionar(usuarioDTO: UsuarioDTO): Promise<Usuario> {
    const id = this.gerarIdUsuario(usuarioDTO.nome);

    const novoUsuario = new this.usuarioModel({ id, ...usuarioDTO });
    return novoUsuario.save();
  }

  async editar(id: string, usuarioDTO: UsuarioDTO): Promise<Usuario> {
    const usuarioExistente = await this.usuarioModel.findOne({ id }).exec();
    if (!usuarioExistente) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return this.usuarioModel
      .findByIdAndUpdate(id, usuarioDTO, { new: true })
      .exec();
  }

  async remover(id: string): Promise<void> {
    const usuarioExistente = await this.usuarioModel.findOne({ id }).exec();
    if (!usuarioExistente) {
      throw new NotFoundException('Usuário não encontrado');
    }
    await this.usuarioModel.deleteOne({ id }).exec();
  }

  async adicionarProdutoAoCarrinho(
    usuarioId: string,
    produtoId: string,
    quantidade: number,
  ): Promise<Usuario> {
    const usuario = await this.usuarioModel.findById(usuarioId).exec();
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const produto = {
      usuarioId: usuarioId, // Adicionando o usuarioId ao produto do carrinho
      produtoId: produtoId,
      quantidade: quantidade,
    };

    usuario.carrinho.push(produto);
    return usuario.save();
  }

  private gerarIdUsuario(nome: string): string {
    const nomeSplit = nome.split(' ')[0]; // Pega o primeiro nome
    const randomNumber = Math.floor(Math.random() * 10000); // Gera um número aleatório entre 0 e 9999
    return `${nomeSplit}${randomNumber}`;
  }
}
