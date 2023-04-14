import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'hi new';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `new thing from ${id}`;
  }
}
