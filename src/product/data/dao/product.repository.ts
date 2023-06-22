import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, StringExpressionOperatorReturningBoolean } from 'mongoose';

import { CreateProductDto } from '../../dto/createProduct.dto';
import { UpdateProductDto } from '../../dto/updateProduct.dto';
import { Product } from '../schema/product.schema';

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
      throw new BadRequestException();
    }
  }

  async updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
    try {
      const product = await this.productModel.findOne({ _id: id });

      if (!product) {
        throw new NotFoundException();
      }
      await this.productModel.findByIdAndUpdate(id, data);

      return this.productModel.findOne({ _id: id });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async deleteProduct(
    id: StringExpressionOperatorReturningBoolean,
  ): Promise<void> {
    try {
      const product = await this.productModel.findOne({ _id: id });

      if (!product) {
        throw new NotFoundException();
      }
      await this.productModel.findByIdAndDelete(id);

      return this.productModel.findOne({ _id: id });
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
