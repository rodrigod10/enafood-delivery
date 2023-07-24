import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UsuarioDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;
}
