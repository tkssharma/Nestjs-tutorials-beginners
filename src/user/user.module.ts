import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
