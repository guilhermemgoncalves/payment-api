import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StoreService {
  async create(createStoreDto: CreateStoreDto) {
    const prisma = new PrismaClient();

    try {
      await prisma.store.create({
        data: {
          name: createStoreDto.name,
        },
      });
      return `Loja ${createStoreDto.name} criada com sucesso`;
    } catch (err) {
      return err.message;
    }
  }

  async findAll() {
    const prisma = new PrismaClient();
    const stores = prisma.store.findMany();
    return stores;
  }

  async findOne(id: string) {
    const prisma = new PrismaClient();
    try {
      const store = prisma.store.findUnique({
        where: { id: id },
      });
      return store;
    } catch (error) {
      return console.log(error);
    }
    return `Não foi possivel encontrar a loja de id = ${id}`;
  }

  async remove(id: string) {
    const prisma = new PrismaClient();
    try {
      const user = prisma.store.delete({
        where: { id: id },
      });
      await prisma.$disconnect();
      return user;
    } catch (error) {
      await prisma.$disconnect();
      return error;
    }
  }
}
