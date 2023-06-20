import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { Product } from './data/entity/product.entity';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './data/services/product.service';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getUsers(): Promise<Product[]> {
    return;
  }

  @Post('/add')
  createUser(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
  ): Promise<Product> {
    return;
  }

  @Put('/:id/edit')
  updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) UpdateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return;
  }
}
