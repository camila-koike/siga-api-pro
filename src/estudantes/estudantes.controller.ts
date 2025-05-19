import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt')) 
@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}

  @Post()
  create(@Body() body: any) {
    return this.estudantesService.create(body);
  }

  @Get()
  findAll() {
    return this.estudantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudantesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.estudantesService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudantesService.remove(+id);
  }
}
