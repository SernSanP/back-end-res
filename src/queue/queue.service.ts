import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataStorageService } from 'src/data-storage/data-storage.service';
import { CreateQueueDto } from './dto/createQueue.dto';
import { CreateQueueDeliveryDto } from './dto/createQueueDelivery.dto';
import { CreateQueueDineInDto } from './dto/createQueueDineIn.dto';
import { CreateQueueTakeOutDto } from './dto/createQueueTakeOut.dto';
import { CreateQueueWaitDineInDto } from './dto/createQueueWaitDineIn.dto';
import { GetQueueDataDeliveryDto } from './dto/getQueueDataDelivery.dto';
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

    async createQueueWaitDineIn(@Body() createQueueWaitDineInDto: CreateQueueWaitDineInDto): Promise<Queue> {
        const queue_num = await this.dataStorageService.dataStorageRepository.findOne({ where: { name: 'queue_num' } })
        if (!queue_num) {
            await this.dataStorageService.createDataStorage({ name: 'queue_num', data: '1' })
            const new_num = parseInt('1') + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueWaitDineIn(createQueueWaitDineInDto, '1')

        }
        else {
            const new_num = parseInt(queue_num.data) + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueWaitDineIn(createQueueWaitDineInDto, queue_num.data)
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

    async createQueueDelivery(@Body() createQueueDeliveryDto: CreateQueueDeliveryDto): Promise<Queue> {
        const queue_num = await this.dataStorageService.dataStorageRepository.findOne({ where: { name: 'queue_num' } })
        if (!queue_num) {
            await this.dataStorageService.createDataStorage({ name: 'queue_num', data: '1' })
            const new_num = parseInt('1') + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueDelivery(createQueueDeliveryDto, '1')

        }
        else {
            const new_num = parseInt(queue_num.data) + 1
            await this.dataStorageService.editDataStorage({ name: 'queue_num', data: new_num.toString() })
            return this.queueRepository.createQueueDelivery(createQueueDeliveryDto, queue_num.data)
        }
    }

    updateQueueAssignTable(@Body() updateQueueAssignTableDto: UpdateQueueAssignTableDto, id: string): Promise<Queue> {
        return this.queueRepository.updateQueueAssignTable(updateQueueAssignTableDto, id)
    }

    resetQueue() {
        return this.dataStorageService.editDataStorage({ name: 'queue_num', data: '1' })
    }

    getQueueNum() {
        return this.dataStorageService.getDataStorage({ "name": "queue_num" })
    }

    getQueueData_Dine_in(): Promise<Queue[]> {
        return this.queueRepository.getQueueData_Dine_in()
    }

    getQueueData_Wait_Dine_in(): Promise<Queue[]> {
        return this.queueRepository.getQueueData_Wait_Dine_in()
    }

    getQueueData_Take_Out(): Promise<Queue[]> {
        return this.queueRepository.getQueueData_Take_Out()
    }

    getQueueData_Delivery(getQueueDataDeliveryDto: GetQueueDataDeliveryDto): Promise<Queue[]> {
        return this.queueRepository.getQueueData_Delivery(getQueueDataDeliveryDto)
    }
}
