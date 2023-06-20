import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schema/product.schema';
import { Model } from 'mongoose';

export class ProductRepository {
  constructor(@InjectModel(Product.name) private catModel: Model<Product>) {}
  async findProducts(): Promise<Product[]> {
    return this.catModel.find().exec();
  }
}
