import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import UserEntity from './entities/user';
import PostEntity from './entities/post';
import CommnentEntity from './entities/comment';

import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule.forRoot({ entities: [
      PostEntity,
      UserEntity,
      CommnentEntity
    ]})
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {

}
