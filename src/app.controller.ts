import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './core/filter/exception';
import { RolesGuard } from './core/guard/user.guard';

@Controller()
@UseFilters(new HttpExceptionFilter())
@UseGuards(RolesGuard)

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
