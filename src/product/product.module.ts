import { Module } from '@nestjs/common';

import { ProductRepository } from './data/dao/product.repository';
import { ProductController } from './product.controller';
import { ProductService } from './data/services/product.service';

@Module({
  imports: [],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
})
export class ProductModule {}
