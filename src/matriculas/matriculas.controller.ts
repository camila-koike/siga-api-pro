// Importa os decorators e funções úteis do NestJS para manipulação de rotas HTTP e requisições
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

// Importa o serviço que contém a lógica de acesso ao banco de dados via Prisma
import { MatriculasService } from './matriculas.service';

// Define que esta classe é um controller e que todas as rotas começarão com "/matriculas"
@Controller('matriculas')
export class MatriculasController {
  
  // Injeta o serviço de matrícula no controller via o construtor
  constructor(private readonly matriculasService: MatriculasService) {}

  // Define uma rota POST para criar uma nova matrícula (POST /matriculas)
  @Post()
  create(@Body() body: any) {
    // Chama o método `create` do serviço, passando os dados do corpo da requisição
    return this.matriculasService.create(body);
  }

  // Define uma rota GET para buscar todas as matrículas (GET /matriculas)
  @Get()
  findAll() {
    // Chama o método `findAll` do serviço e retorna todas as matrículas
    return this.matriculasService.findAll();
  }

  // Define uma rota GET com parâmetros para buscar uma matrícula específica
  // Exemplo de rota: GET /matriculas/3/42
  @Get(':disciplina/:estudante')
  findOne(@Param('disciplina') d: string, @Param('estudante') e: string) {
    // Converte os parâmetros de string para número usando o operador "+"
    // Chama o serviço para buscar a matrícula específica com base na chave composta
    return this.matriculasService.findOne(+d, +e);
  }

  // Define uma rota PUT para atualizar uma matrícula específica
  // Exemplo: PUT /matriculas/3/42
  @Put(':disciplina/:estudante')
  update(
    @Param('disciplina') d: string,            // Pega o ID da disciplina da URL
    @Param('estudante') e: string,             // Pega o ID do estudante da URL
    @Body() body: any                          // Pega os dados atualizados do corpo da requisição
  ) {
    // Converte os parâmetros para número e passa para o serviço de update
    return this.matriculasService.update(+d, +e, body);
  }

  // Define uma rota DELETE para excluir uma matrícula específica
  // Exemplo: DELETE /matriculas/3/42
  @Delete(':disciplina/:estudante')
  remove(@Param('disciplina') d: string, @Param('estudante') e: string) {
    // Converte os parâmetros e chama o serviço para deletar a matrícula
    return this.matriculasService.remove(+d, +e);
  }
}
