import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueRepository } from './queue.repository';
import { DataStorageModule } from 'src/data-storage/data-storage.module';

@Module({
  imports: [TypeOrmModule.forFeature([QueueRepository]), DataStorageModule],
  providers: [QueueService],
  controllers: [QueueController]
})
export class QueueModule { }
