import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class JogosService {
  async create(data: any) {
    return await prisma.jogoDaVelha.create({ data });
  }

  async findAll() {
    return await prisma.jogoDaVelha.findMany();
  }

  async findOne(id: number) {
    return await prisma.jogoDaVelha.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return await prisma.jogoDaVelha.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await prisma.jogoDaVelha.delete({ where: { id } });
  }
}

