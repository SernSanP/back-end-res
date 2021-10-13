import { DataStorageService } from "src/data-storage/data-storage.service";
import { EntityRepository, In, Repository } from "typeorm";
import { CreateQueueDto } from "./dto/createQueue.dto";
import { CreateQueueDeliveryDto } from "./dto/createQueueDelivery.dto";
import { CreateQueueDineInDto } from "./dto/createQueueDineIn.dto";
import { CreateQueueTakeOutDto } from "./dto/createQueueTakeOut.dto";
import { CreateQueueWaitDineInDto } from "./dto/createQueueWaitDineIn.dto";
import { GetQueueDataDeliveryDto } from "./dto/getQueueDataDelivery.dto";
import { UpdateQueueAssignTableDto } from "./dto/updateQueueAssignTable.dto";
import { Queue } from "./queue.entity";

@EntityRepository(Queue)
export class QueueRepository extends Repository<Queue> {
    async createQueue(createQueueDto: CreateQueueDto, queue_num: string): Promise<Queue> {
        const { queue_group, order_method } = createQueueDto
        const queue = this.create({
            queue_group,
            order_method,
            queue_num
        })
        await this.save(queue)
        return queue
    }

    async createQueueWaitDineIn(createQueueWaitDineInDto: CreateQueueWaitDineInDto, queue_num: string): Promise<Queue> {
        const { queue_group } = createQueueWaitDineInDto
        const queue = this.create({
            queue_group,
            order_method: "wait-dine-in",
            queue_num
        })
        await this.save(queue)
        return queue
    }

    async createQueueDineIn(createQueueDineInDto: CreateQueueDineInDto, queue_num: string): Promise<Queue> {
        const { table_id, queue_group } = createQueueDineInDto
        const queue = this.create({
            table_id,
            queue_group,
            order_method: "dine-in",
            queue_num
        })
        await this.save(queue)
        return queue
    }

    async createQueueTakeOut(createQueueTakeOutDto: CreateQueueTakeOutDto, queue_num: string): Promise<Queue> {
        const { queue_group } = createQueueTakeOutDto
        const queue = this.create({
            queue_group,
            order_method: "take-out",
            queue_num
        })
        await this.save(queue)
        return queue
    }

    async createQueueDelivery(createQueueDeliveryDto: CreateQueueDeliveryDto, queue_num: string): Promise<Queue> {
        const { delivery_by, queue_group } = createQueueDeliveryDto
        const queue = this.create({
            queue_group,
            order_method: delivery_by,
            queue_num
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

    async getQueueData_Dine_in(): Promise<Queue[]> {
        return this.find({ where: { order_method: "dine-in" } })
    }

    async getQueueData_Wait_Dine_in(): Promise<Queue[]> {
        return this.find({ where: { order_method: "wait-dine-in" } })
    }

    async getQueueData_Take_Out(): Promise<Queue[]> {
        return this.find({ where: { order_method: "take-out" } })
    }

    async getQueueData_Delivery(getQueueDataDeliveryDto: GetQueueDataDeliveryDto): Promise<Queue[]> {
        return this.find({ where: { order_method: In(['line_man', 'food_panda', 'grab', 'robinhood']) } })
    }
}
