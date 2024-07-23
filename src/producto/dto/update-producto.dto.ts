import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  nombreproducto?: string;

  @IsOptional()
  @IsNumber()
  idmarca?: number;

  @IsOptional()
  @IsNumber()
  idcategoria?: number;

  @IsOptional()
  @IsNumber({}, { each: true })
  precioventa?: number;

  @IsOptional()
  @IsString()
  imagen?: string;
}
