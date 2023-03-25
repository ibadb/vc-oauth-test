import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/smart')
  smart(@Query('code') code: string, @Query('state') state: string) {
    console.log('code: ', code);
    console.log('state: ', state);
  }
}
