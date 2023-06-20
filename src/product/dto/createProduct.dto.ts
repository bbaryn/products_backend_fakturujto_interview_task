import { IsDateString, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @Min(0)
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @Min(0)
  @IsInt()
  stock: number;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsIn(['smartphones', 'laptops', 'displays'])
  category: string;

  @IsOptional()
  @MaxLength(2000)
  description: string;
}
