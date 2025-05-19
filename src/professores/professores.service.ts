import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProfessoresService {
  async create(data: any) {
    return await prisma.professor.create({ data });
  }

  async findAll() {
    return await prisma.professor.findMany();
  }

  async findOne(fk_usuarios_id: number) {
    return await prisma.professor.findUnique({ where: { fk_usuarios_id } });
  }

  async update(fk_usuarios_id: number, data: any) {
    return await prisma.professor.update({
      where: { fk_usuarios_id },
      data,
    });
  }

  async remove(fk_usuarios_id: number) {
    return await prisma.professor.delete({ where: { fk_usuarios_id } });
  }
}
