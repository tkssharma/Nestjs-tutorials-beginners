import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import 'dotenv/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    SharedModule,
    AuthModule,
    ProductModule,
    OrderModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {

}
