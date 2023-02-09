import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { UserModule } from '../user/user.module';
import { StoreModule } from '../store/store.module';
import { UserService } from '../user/user.service';
import { StoreService } from '../store/store.service';

@Module({
  imports: [UserModule, StoreModule],
  controllers: [PaymentController],
  providers: [PaymentService, UserService, StoreService],
})
export class PaymentModule {}
