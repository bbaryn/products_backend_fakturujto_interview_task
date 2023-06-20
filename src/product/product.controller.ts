import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { Product } from './data/schema/product.schema';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './data/services/product.service';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Post('/add')
  createProduct(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Put('/:id/edit')
  updateProduct(
    @Param('id') id: string,
    @Body(ValidationPipe) updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }
}
