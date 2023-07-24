import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioDTO } from './usuario.dto';
import { Usuario } from './usuario.schema';
import { UsuariosService } from './usuario.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Get()
  async obterTodos(): Promise<Usuario[]> {
    return this.usuariosService.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string): Promise<Usuario> {
    const usuario = await this.usuariosService.obterPorId(id);
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }

  @Post()
  async adicionar(@Body() usuarioDTO: UsuarioDTO): Promise<Usuario> {
    return this.usuariosService.adicionar(usuarioDTO);
  }

  @Put(':id')
  async editar(
    @Param('id') id: string,
    @Body() usuarioDTO: UsuarioDTO,
  ): Promise<Usuario> {
    return this.usuariosService.editar(id, usuarioDTO);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remover(id);
  }
}
