import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('new')
  findAll() {
    return 'hi new';
  }
}
