import { queue } from "rxjs";
import { EntityRepository, Repository } from "typeorm";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { UpdateOrderEditDto } from "./dto/updateOrderEdit.dto";
import { UpdateOrderStatusDto } from "./dto/updateOrderStatus.dto";
import { Order } from "./order.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const { category, queue_id } = createOrderDto
        const order = this.create({
            category,
            // topping,
            queue_id,
            status: 'waiting'
        })
        await this.save(order)
        return order
    }

    async updateOrderStatus(updateOrderStatusDto: UpdateOrderStatusDto, id: string): Promise<Order> {
        const order = await this.findOne(id)
        const { status } = updateOrderStatusDto
        order.status = status
        await this.update(id, order)
        return order
    }

    async updateOrderEdit(updateOrderEditDto: UpdateOrderEditDto, id: string): Promise<Order> {
        const order = await this.findOne(id)
        const { category } = updateOrderEditDto
        order.category = category
        // order.topping = topping
        await this.update(id, order)
        return order
    }

    async deleteOrder(id: string) {
        await this.delete(id)
    }
}
