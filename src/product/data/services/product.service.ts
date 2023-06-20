import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../dao/product.repository';
import { Product } from '../schema/product.schema';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getProducts(): Promise<Product[]> {
    return this.productRepository.findProducts();
  }
}
