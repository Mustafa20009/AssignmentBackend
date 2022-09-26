import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Product } from './Product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProductService {
  constructor(@InjectModel('product') private productModel: Model<Product>) {}
  product: Product[] = [];

  async insertProductMethord(
    name: string,
    price: number,
    description: string,
    inventDate: Date,
  ) {
    try {
      const product = await new this.productModel({
        name,
        price,
        description,
        inventDate,
      });
      let result = await product.save();

      return result;
    } catch (error) {
      let errorsArr = Object.values(error.errors).map(
        (v: { message: string }, k) => {
          return v?.message;
        },
      );
      throw new BadRequestException(errorsArr[0]);
    }
  }
  async getAllProduct(name: string) {
    return await this.productModel.find({ name: { $regex: name } });
  }
  async singleProduct(id: string) {
    try {
      let result = await this.productModel.findById(id);
      return result;
    } catch (error) {
      throw new NotFoundException('Product Did not Found');
    }
  }
  async UpdateProduct(
    id: string,
    name: string,
    price: number,
    description: string,
    inventDate: Date,
  ) {
    try {
      const product = await this.productModel.findByIdAndUpdate(
        id,
        {
          name: name,
          price: price,
          description: description,
          inventDate: inventDate,
        },
        {
          new: true,
        },
      );
      return product;
    } catch (error) {
      throw new NotFoundException('Product  Did not Found');
    }
  }
}
