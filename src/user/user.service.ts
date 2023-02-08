import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private prisma = new PrismaClient();
  async create(createUserDto: CreateUserDto) {
    try {
      await this.prisma.user.create({
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
    const users = this.prisma.user.findMany();
    await this.prisma.$disconnect();
    return users;
  }

  async findOne(id: string) {
    try {
      const user = this.prisma.user.findUnique({
        where: { id: id },
      });
      await this.prisma.$disconnect();
      return user;
    } catch (error) {
      await this.prisma.$disconnect();
      return error;
    }
  }

  async remove(id: string) {
    try {
      const user = this.prisma.user.delete({
        where: { id: id },
      });
      await this.prisma.$disconnect();
      return user;
    } catch (error) {
      await this.prisma.$disconnect();
      return error;
    }
  }
}
