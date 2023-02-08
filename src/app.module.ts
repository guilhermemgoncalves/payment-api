import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [UserModule, StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
