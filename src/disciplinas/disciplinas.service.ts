import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DisciplinasService {
  async create(data: any) {
    return await prisma.disciplina.create({ data });
  }

  async findAll() {
    return await prisma.disciplina.findMany();
  }

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

