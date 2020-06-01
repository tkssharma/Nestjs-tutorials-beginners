import { Get, UseGuards, Param, Post, Body, Controller } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserSchema } from "src/models/user.schema";
import { CreateOrderDTO } from "./order.dto";
import { createParamDecorator } from '@nestjs/common';
import { OrderService } from "./order.service";

export const User = createParamDecorator ((data, req) => req.user);

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService){

    }
   @Get()
   @UseGuards(AuthGuard('jwt'))
   listAllMyorders(@User() {id}: any) {
       return this.orderService.listAllMyOrders(id);
   }
   @Post()
   @UseGuards(AuthGuard('jwt'))
   createNewOrder(@Body() order: CreateOrderDTO, @User() {id} : any) {
       return this.orderService.createMyOrder(id, order);
   }
}