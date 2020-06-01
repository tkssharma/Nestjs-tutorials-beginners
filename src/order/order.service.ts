import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Order } from "../types/order";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { CreateOrderDTO } from "./order.dto";

export class OrderService {
    constructor(@InjectModel('Order') private orderModel: Model<Order>){
    }

    async listAllMyOrders(id: string){
      const orders =  await this.orderModel
               .find({ owner : id})
               .populate('owner')
               .populate('product.products');
     if(!orders){
         throw new HttpException('NO ORDER FOUND', HttpStatus.NO_CONTENT);
     }
     return orders;

    }
    async createMyOrder(id: string, orderDTO: CreateOrderDTO){
        let createOrder = {
            owner: id,
            products: orderDTO.products
        }
        const { _id } = await this.orderModel.create(createOrder);
        let order = await this.orderModel
        .findById(_id)
        .populate('owner')
        .populate('products.product');
      return order;
    }
}