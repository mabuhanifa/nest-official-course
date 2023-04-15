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
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('hello from express response');
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
