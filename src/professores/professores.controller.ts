import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';
  import { ProfessoresService } from './professores.service';
  
  // Nome da classe corrigido para refletir o módulo: ProfessoresController
  @Controller('professores')
  export class ProfessoresController {
    constructor(private readonly professoresService: ProfessoresService) {}
  
    // POST /professores → criar professor
    @Post()
    create(@Body() body: any) {
      return this.professoresService.create(body);
    }
  
    // GET /professores → listar todos os professores
    @Get()
    findAll() {
      return this.professoresService.findAll();
    }
  
    // GET /professores/:id → buscar professor por ID
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.professoresService.findOne(+id);
    }
  
    // PUT /professores/:id → atualizar professor
    @Put(':id')
    update(@Param('id') id: string, @Body() body: any) {
      return this.professoresService.update(+id, body);
    }
  
    // DELETE /professores/:id → remover professor
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.professoresService.remove(+id);
    }
  }
  