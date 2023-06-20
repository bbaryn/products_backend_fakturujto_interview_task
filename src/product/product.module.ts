import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductRepository } from './data/dao/product.repository';
import { ProductController } from './product.controller';
import { ProductService } from './data/services/product.service';
import { Product, ProductSchema } from './data/schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
})
export class ProductModule {}
