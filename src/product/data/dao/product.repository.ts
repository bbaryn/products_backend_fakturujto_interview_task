import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schema/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from '../../dto/createProduct.dto';
import { UpdateProductDto } from 'src/product/dto/updateProduct.dto';

export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async findProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async createProduct(data: CreateProductDto): Promise<Product> {
    const createdCat = new this.productModel(data);

    return createdCat.save();
  }

  async updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
    const product = await this.productModel.findOne({ _id: id });

    if (!product) {
      return;
    }

    return this.productModel.findByIdAndUpdate(id, data);
  }
}
