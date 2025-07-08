import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DisciplinasService {
  async create(data: any) {
    return await prisma.disciplina.create({ data });
  }
  async findAll() {
    const disciplinas = await prisma.disciplina.findMany({
      include: {
        professor: {
          include: {
            usuario: true,
          },
        },
      },
    });

    // Mapeia para devolver só o que interessa
    return disciplinas.map((disciplina) => ({
      id: disciplina.id,
      periodo: disciplina.periodo,
      turno: disciplina.turno,
      nome: disciplina.nome,
      qnt_total_aulas: disciplina.qnt_total_aulas,
      carga_horaria: disciplina.carga_horaria,
      curso: disciplina.curso,
      professor: disciplina.professor
        ? {
            id: disciplina.professor.usuario.id,
            nome: disciplina.professor.usuario.nome,
            email: disciplina.professor.usuario.email,
          }
        : null,
    }));
  }

 
  /*
   async findAll() {
    return await prisma.disciplina.findMany();
  }*/

  async findOne(id: number) {
    return await prisma.disciplina.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return await prisma.disciplina.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await prisma.disciplina.delete({ where: { id } });
  }
}

