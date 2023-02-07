import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const prisma = new PrismaClient();

    try {
      await prisma.user.create({
        data: {
          username: createUserDto.username,
          isAdmin: createUserDto.isAdmin,
        },
      });
      return `usuário ${createUserDto.username} criado com sucesso`;
    } catch (err) {
      return err.message;
    }
  }

  async findAll() {
    const prisma = new PrismaClient();
    return prisma.user.findMany();
  }

  async findOne(id: string) {
    const prisma = new PrismaClient();
    try {
      const user = prisma.user.findUnique({
        where: { id: id },
      });
      await prisma.$disconnect();
      return user;
    } catch (error) {
      await prisma.$disconnect();
      return error;
    }
  }

  async remove(id: string) {
    const prisma = new PrismaClient();
    try {
      const user = prisma.user.delete({
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
