import { Controller, Get, Post, Body, Put, ForbiddenException, NotFoundException, InternalServerErrorException, UseFilters, UseGuards, UseInterceptors, BadRequestException, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.services';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/ping')
  postHello(): string {
    return 'Hello from User'
  }
}
