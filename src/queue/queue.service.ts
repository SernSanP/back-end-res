import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataStorageService } from 'src/data-storage/data-storage.service';
import { CreateQueueDto } from './dto/createQueue.dto';
import { CreateQueueDineInDto } from './dto/createQueueDineIn.dto';
import { CreateQueueTakeOutDto } from './dto/createQueueTakeOut.dto';
import { UpdateQueueAssignTableDto } from './dto/updateQueueAssignTable.dto';
import { Queue } from './queue.entity';
import { QueueRepository } from './queue.repository';

@Injectable()
export class QueueService {
    constructor(
        private dataStorageService: DataStorageService,
        @InjectRepository(QueueRepository)
        private queueRepository: QueueRepository,
    ) { }

    async createQueue(@Body() createQueueDto: CreateQueueDto): Promise<Queue> {
        const queue_num = await this.dataStorageService.dataStorageRepository.findOne({ where: { name: 'queue_num' } })
        if (!queue_num) {
            await this.dataStorageService.createDataStorage({ name: 'queue_num', data: '1' })
            const new_num = parseInt('1') + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueue(createQueueDto, '1')

        }
        else {
            const new_num = parseInt(queue_num.data) + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueue(createQueueDto, queue_num.data)
        }
    }

    async createQueueDineIn(@Body() createQueueDineInDto: CreateQueueDineInDto): Promise<Queue> {
        const queue_num = await this.dataStorageService.dataStorageRepository.findOne({ where: { name: 'queue_num' } })
        if (!queue_num) {
            await this.dataStorageService.createDataStorage({ name: 'queue_num', data: '1' })
            const new_num = parseInt('1') + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueDineIn(createQueueDineInDto, '1')

        }
        else {
            const new_num = parseInt(queue_num.data) + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueDineIn(createQueueDineInDto, queue_num.data)
        }
    }

    async createQueueTakeOut(@Body() createQueueTakeOutDto: CreateQueueTakeOutDto): Promise<Queue> {
        const queue_num = await this.dataStorageService.dataStorageRepository.findOne({ where: { name: 'queue_num' } })
        if (!queue_num) {
            await this.dataStorageService.createDataStorage({ name: 'queue_num', data: '1' })
            const new_num = parseInt('1') + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueTakeOut(createQueueTakeOutDto, '1')

        }
        else {
            const new_num = parseInt(queue_num.data) + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueTakeOut(createQueueTakeOutDto, queue_num.data)
        }
    }

    updateQueueAssignTable(@Body() updateQueueAssignTableDto: UpdateQueueAssignTableDto, id: string): Promise<Queue> {
        return this.queueRepository.updateQueueAssignTable(updateQueueAssignTableDto, id)
    }

    resetQueue() {
        return this.dataStorageService.editDataStorage({ name: 'queue_num', data: '1' })
    }
}
