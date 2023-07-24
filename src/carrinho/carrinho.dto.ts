import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CarrinhoDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  usuarioId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  produtoId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantidade: number;
}
