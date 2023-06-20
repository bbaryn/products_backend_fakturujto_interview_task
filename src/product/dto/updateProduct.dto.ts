import {
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @Min(0)
  @IsNumber()
  price: number;

  @IsOptional()
  @Min(0)
  @IsInt()
  stock: number;

  @IsOptional()
  @IsDateString()
  date: Date;

  @IsOptional()
  @IsIn(['smartphones', 'laptops', 'displays'])
  category: string;

  @IsOptional()
  @MaxLength(2000)
  description: string;
}
