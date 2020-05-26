import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import 'dotenv/config';
import { AppService } from './app.service';
import {UserModule} from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {

}
