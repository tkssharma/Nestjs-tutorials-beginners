import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
    createParamDecorator,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  
  import { SellerGuard } from '../guards/seller.guard';
  import { Product } from '../types/product';
  import { User as UserDocument } from '../types/user';
  import { ProductService } from './product.service';
  
  export const User = createParamDecorator ((data, req) => req.user);

  
  @Controller('product')
  export class ProductController {
    constructor(private productService: ProductService) {}
  
    @Get()
    async listAll(): Promise<Product[]> {
      return await this.productService.findAll();
    }
  
    @Get('/mine')
    @UseGuards(AuthGuard('jwt'), SellerGuard)
    async listMine(@Param() productId: any, @User() user: UserDocument): Promise<Product[]> {
      const { id } = user;
      return await this.productService.findByOwner(id);
    }

    @Put(':productId')
    @UseGuards(AuthGuard('jwt'), SellerGuard)
    async updateProduct(@Param() productId: any, @User() user: UserDocument): Promise<Product[]> {
      const { id } = user;
      return await this.productService.updateProduct(id);
    }

    @Post()
    @UseGuards(AuthGuard('jwt'), SellerGuard)
    async create(
      @Body() product: CreateProductDTO,
      @User() user: UserDocument,
    ): Promise<Product> {
      return await this.productService.create(product, user);
    }

    @Get(':productId')
    async read(@Param('productId') productId: string): Promise<Product> {
      return await this.productService.findById(id);
    }

    @Delete(':productId')
    @UseGuards(AuthGuard('jwt'), SellerGuard)
    async delete(
      @Param('productId') productId: string,
      @User() user: UserDocument,
    ): Promise<Product> {
      const { id: userId } = user;
      return await this.productService.delete(productId, userId);
    }

}