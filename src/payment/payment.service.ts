import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaClient } from '@prisma/client';
import { UserService } from '../user/user.service';
import { StoreService } from '../store/store.service';

@Injectable()
export class PaymentService {
  private prisma = new PrismaClient();
  constructor(
    private readonly userService: UserService,
    private readonly storeService: StoreService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const user = await this.userService.findOne(createPaymentDto.costumerid);
    if (user == null) {
      console.log('Usuário não encontrado');
      return;
    }
    const store = await this.storeService.findOne(createPaymentDto.storeid);
    if (store == null) {
      console.log('Loja invalida');
      return;
    }
    const payment = await this.prisma.payment.create({
      data: {
        storeid: createPaymentDto.storeid,
        customerid: createPaymentDto.costumerid,
        amount: createPaymentDto.amount,
      },
    });
    return payment;
  }

  // async findAll() {
  //   const payment = await this.prisma.payment.findMany({
  //     include: {
  //       customer: true,
  //       store: true,
  //     },
  //   });
  //   console.log(payment);
  //   return payment;
  // }

  async findAll() {
    const payment = await this.prisma.payment.findMany({
      include: {
        customer: true,
        store: true,
      },
    });
    console.log(payment);
    return payment;
  }
  async findByStore(storeid: string) {
    const payment = await this.prisma.payment.findMany({
      where: {
        storeid: storeid,
      },
      include: {
        customer: true,
        store: true,
      },
    });
    console.log(payment);
    return payment;
  }

  findOne(id: string) {
    return `This action returns a #${id} payment`;
  }

  update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: string) {
    return `This action removes a #${id} payment`;
  }
}
