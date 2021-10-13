import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateQueueDto } from './dto/createQueue.dto';
import { CreateQueueDeliveryDto } from './dto/createQueueDelivery.dto';
import { CreateQueueDineInDto } from './dto/createQueueDineIn.dto';
import { CreateQueueTakeOutDto } from './dto/createQueueTakeOut.dto';
import { CreateQueueWaitDineInDto } from './dto/createQueueWaitDineIn.dto';
import { GetQueueDataDeliveryDto } from './dto/getQueueDataDelivery.dto';
import { UpdateQueueAssignTableDto } from './dto/updateQueueAssignTable.dto';
import { Queue } from './queue.entity';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
    constructor(private queueService: QueueService) { }

    @Post()
    createQueue(@Body() createQueueDto: CreateQueueDto): Promise<Queue> {
        return this.queueService.createQueue(createQueueDto)
    }

    @Post('/dine-in')
    createQueueDineIn(@Body() createQueueDineInDto: CreateQueueDineInDto): Promise<Queue> {
        return this.queueService.createQueueDineIn(createQueueDineInDto)
    }

    @Post('/wait-dine-in')
    createQueueWaitDineIn(@Body() createQueueWaitDineInDto: CreateQueueWaitDineInDto): Promise<Queue> {
        return this.queueService.createQueueWaitDineIn(createQueueWaitDineInDto)
    }

    @Post('/delivery')
    createQueueDelivery(@Body() createQueueDeliveryDto: CreateQueueDeliveryDto): Promise<Queue> {
        return this.queueService.createQueueDelivery(createQueueDeliveryDto)
    }

    @Patch('/assign-table/:id')
    updateQueueAssignTable(@Param('id') id: string, @Body() updateQueueAssignTableDto: UpdateQueueAssignTableDto): Promise<Queue> {
        return this.queueService.updateQueueAssignTable(updateQueueAssignTableDto, id)
    }

    @Post('/take-out')
    createQueueTakeOut(@Body() createQueueTakeOutDto: CreateQueueTakeOutDto): Promise<Queue> {
        return this.queueService.createQueueTakeOut(createQueueTakeOutDto)
    }

    @Patch('/reset-queue')
    resetQueue() {
        return this.queueService.resetQueue()
    }

    @Get('/queue-num')
    getQueueNum() {
        return this.queueService.getQueueNum()
    }

    @Get('/dine-in')
    getQueueData_Dine_in(): Promise<Queue[]> {
        return this.queueService.getQueueData_Dine_in()
    }

    @Get('/wait-dine-in')
    getQueueData_Wait_Dine_in(): Promise<Queue[]> {
        return this.queueService.getQueueData_Wait_Dine_in()
    }

    @Get('/take-out')
    getQueueData_Take_Out(): Promise<Queue[]> {
        return this.queueService.getQueueData_Take_Out()
    }

    @Get('/delivery')
    getQueueData_Delivery(getQueueDataDeliveryDto: GetQueueDataDeliveryDto): Promise<Queue[]> {
        return this.queueService.getQueueData_Delivery(getQueueDataDeliveryDto)
    }
}



