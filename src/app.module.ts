import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UserModule, StoreModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
