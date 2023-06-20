import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schema/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from '../../dto/createProduct.dto';
import { UpdateProductDto } from 'src/product/dto/updateProduct.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';

export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async findProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async createProduct(data: CreateProductDto): Promise<Product> {
    const createdCat = new this.productModel(data);

    try {
      return createdCat.save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
    try {
      const product = await this.productModel.findOne({ _id: id });

      if (!product) {
        throw new NotFoundException();
      }
      return this.productModel.findByIdAndUpdate(id, data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
