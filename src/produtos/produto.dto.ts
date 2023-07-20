import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CriarProdutoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  descricao: string;
}

export class EditarProdutoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  descricao: string;
}
