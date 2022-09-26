import { Body, Controller, Get, Param, Patch, Post, Query, } from '@nestjs/common';
import { ProductService } from './Product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  async addProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
    @Body('inventDate') inventDate: Date,
  ) {
    let p = await this.productService.insertProductMethord(
      name.toLowerCase(),
      price,
      description,
      inventDate,
    );
    return { status: 'true', data: p};
  }
  @Get("search?")
  async getAllProduct(@Query('name') name:string) {
    let result= await this.productService.getAllProduct(name);
    return {status:true,data:[...result]}
  }
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.singleProduct(id);
  }
  @Patch(":id")
  async UpdateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
    @Body('inventDate') inventDate: Date,
  ) {
    let p = await this.productService.UpdateProduct(
      id,
      name,
      price,
      description,
      inventDate,
    );
    return { status: 'true', data: p};
  }
  // @Get("filter/search?")
  // async SearchProduct(@Query('name') name:string){
  //   let result= await this.productService.getFilterProduct(name);
  //   return {status:true,data:[...result]} 
  // }
}
