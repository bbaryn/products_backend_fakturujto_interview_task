import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductRepository } from './data/dao/product.repository';
import { Product, ProductSchema } from './data/schema/product.schema';
import { ProductService } from './data/services/product.service';
import { ProductController } from './product.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
})
export class ProductModule {}
