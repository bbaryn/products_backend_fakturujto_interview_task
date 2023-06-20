import { Injectable } from '@nestjs/common';

import { CreateProductDto } from '../../dto/createProduct.dto';
import { UpdateProductDto } from '../../dto/updateProduct.dto';
import { ProductRepository } from '../dao/product.repository';
import { Product } from '../schema/product.schema';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getProducts(): Promise<Product[]> {
    return this.productRepository.findProducts();
  }

  createProduct(data: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(data);
  }

  updateProduct(id, data: UpdateProductDto): Promise<Product> {
    return this.productRepository.updateProduct(id, data);
  }
}
