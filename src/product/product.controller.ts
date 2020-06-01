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
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { SellerGuard } from '../guards/seller.guard';
import { Product } from '../types/product';
import { User as UserDocument } from '../types/user';
import { CreateProductDTO, UpdateProductDTO } from './product.dto';
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
  async listMine(@User() user: UserDocument): Promise<Product[]> {
    const userId  = user['id'];
    return await this.productService.findByOwner(userId);
  }

  @Get('/seller/:id')
  async listBySeller(@Param('id') id: string): Promise<Product[]> {
    return await this.productService.findByOwner(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'), SellerGuard)
  async create(
    @Body() product: CreateProductDTO,
    @User() user: UserDocument,
  ): Promise<Product> {
    return await this.productService.create(product, user);
  }

  @Get(':id')
  async read(@Param('id') id: string): Promise<Product> {
    return await this.productService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'), SellerGuard)
  async update(
    @Param('id') id: string,
    @Body() product: UpdateProductDTO,
    @User() user: UserDocument,
  ): Promise<Product> {
    const userId  = user['id'];
    return await this.productService.update(id, product, userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), SellerGuard)
  async delete(
    @Param('id') id: string,
    @User() user: UserDocument,
  ): Promise<Product> {
    const userId  = user['id'];
    return await this.productService.delete(id, userId);
  }
}
