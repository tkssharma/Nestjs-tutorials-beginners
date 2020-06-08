import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ContactEntity from '../entities/contact';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactEntity])
    ],
  controllers: [],
  providers: [],
})
export class AppModule  {

}
