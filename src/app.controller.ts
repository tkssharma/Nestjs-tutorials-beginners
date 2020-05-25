import { Controller, Get, UseFilters, UseGuards, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './core/filter/exception';
import { RolesGuard } from './core/guard/user.guard';
import { ApiProperty } from '@nestjs/swagger';
import {mainDto} from './core/dto';
@Controller()
@UseFilters(new HttpExceptionFilter())
@UseGuards(RolesGuard)

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postHello(@Body() data: mainDto): string {
    return this.appService.getHello();
  }
}
