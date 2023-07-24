/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from 'src/usuarios/usuario.module';
import { UsuariosService } from 'src/usuarios/usuario.service';
import { Usuario, UsuarioSchema } from '../usuarios/usuario.schema';
import { CarrinhoController } from './carrinho.controller';
import { Carrinho, CarrinhoSchema } from './carrinho.schema';
import { CarrinhoService } from './carrinho.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Carrinho.name, schema: CarrinhoSchema },
      { name: Usuario.name, schema: UsuarioSchema },
    ]),
    UsuariosModule,
  ],
  controllers: [CarrinhoController],
  providers: [CarrinhoService, UsuariosService],
})
export class CarrinhoModule { }
