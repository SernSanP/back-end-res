import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueController } from './queue/queue.controller';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { QueueService } from './queue/queue.service';
import { QueueModule } from './queue/queue.module';
import { OrderModule } from './order/order.module';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TableModule } from './table/table.module';
import { PaymentModule } from './payment/payment.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { DataStorageModule } from './data-storage/data-storage.module';

@Module({
  imports: [QueueModule, OrderModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'proj-res',
    autoLoadEntities: true,
    synchronize: true,
  }), UserModule, TableModule, PaymentModule, AuthModule, DataStorageModule],
})
export class AppModule { }
