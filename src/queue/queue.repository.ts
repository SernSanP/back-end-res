import { DataStorageService } from "src/data-storage/data-storage.service";
import { EntityRepository, Repository } from "typeorm";
import { CreateQueueDto } from "./dto/createQueue.dto";
import { CreateQueueDineInDto } from "./dto/createQueueDineIn.dto";
import { CreateQueueTakeOutDto } from "./dto/createQueueTakeOut.dto";
import { UpdateQueueAssignTableDto } from "./dto/updateQueueAssignTable.dto";
import { Queue } from "./queue.entity";

@EntityRepository(Queue)
export class QueueRepository extends Repository<Queue> {
    async createQueue(createQueueDto: CreateQueueDto, queue_num: string): Promise<Queue> {
        const { queue_group } = createQueueDto
        const queue = this.create({
            queue_num,
            queue_group
        })
        await this.save(queue)
        return queue
    }

    async createQueueDineIn(createQueueDineInDto: CreateQueueDineInDto, queue_num: string): Promise<Queue> {
        const { table_id, queue_group } = createQueueDineInDto
        const queue = this.create({
            table_id,
            queue_num,
            queue_group
        })
        await this.save(queue)
        return queue
    }

    async createQueueTakeOut(createQueueTakeOutDto: CreateQueueTakeOutDto, queue_num: string): Promise<Queue> {
        const { queue_group, delivery_by } = createQueueTakeOutDto
        const queue = this.create({
            queue_num,
            queue_group,
            delivery_by
        })
        await this.save(queue)
        return queue
    }

    async updateQueueAssignTable(updateQueueAssignTableDto: UpdateQueueAssignTableDto, id: string): Promise<Queue> {
        const { table_id } = updateQueueAssignTableDto
        const queue = await this.findOne(id)
        queue.table_id = table_id
        await this.update(id, queue)
        return queue
    }
}
