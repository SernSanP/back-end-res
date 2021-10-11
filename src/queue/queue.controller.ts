import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateQueueDto } from './dto/createQueue.dto';
import { CreateQueueDineInDto } from './dto/createQueueDineIn.dto';
import { CreateQueueTakeOutDto } from './dto/createQueueTakeOut.dto';
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
    createQueueWaitDineIn(@Body() createQueueDto: CreateQueueDto): Promise<Queue> {
        return this.queueService.createQueue(createQueueDto)
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
}
