import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosController } from './usuario.controller';
import { Usuario, UsuarioSchema } from './usuario.schema';
import { UsuariosService } from './usuario.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService], // Exporte o UsuariosService aqui para que seja acessível em outros módulos.
})
export class UsuariosModule { }
