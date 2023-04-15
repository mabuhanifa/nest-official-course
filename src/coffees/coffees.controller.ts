import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `hello from express response. limit -> ${limit} & offset -> ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `new thing from ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return ` thing updated from ${id}, with ${body.email}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `thing deleted from ${id}`;
  }
}
