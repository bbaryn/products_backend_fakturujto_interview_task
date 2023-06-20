import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { Product } from './data/entity/product.schema';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './data/services/product.service';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return;
  }

  @Post('/add')
  createProduct(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
  ): Promise<Product> {
    return;
  }

  @Put('/:id/edit')
  updateProduct(
    @Param('id') id: string,
    @Body(ValidationPipe) UpdateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return;
  }
}
