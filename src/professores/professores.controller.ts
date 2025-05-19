import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfessoresService } from './professores.service';

@UseGuards(AuthGuard('jwt')) // Aplica o guard a todas as rotas do controller
@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  // POST /professores → criar professor (autenticado)
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
