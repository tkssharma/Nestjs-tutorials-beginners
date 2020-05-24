import { Controller, Get, Post, Body, Put, ForbiddenException, NotFoundException, InternalServerErrorException, UseFilters, UseGuards, UseInterceptors, BadRequestException, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.services';
import { HttpExceptionFilter } from 'src/core/filter/exception';
import { RolesGuard } from 'src/core/guard/user.guard';
import { LoggingInterceptor } from 'src/core/interceptor/intercept';
// /user HTTP GET 
import {UserDataDto} from './dto/userdatadto'
@UseInterceptors(LoggingInterceptor)
@UseGuards(RolesGuard)
@UseFilters(new HttpExceptionFilter())


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  postHello( @Body(new ValidationPipe()) createCatDto: UserDataDto): string {
    return this.userService.getHello();
  }

  @Put('/')
  putHello(@Body() args): string {
    return this.userService.getHello();
  }
}
