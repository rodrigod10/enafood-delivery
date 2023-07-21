import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProdutoDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nome: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly preco: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly descricao: string;
}
