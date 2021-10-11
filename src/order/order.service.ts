import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderEditDto } from './dto/updateOrderEdit.dto';
import { UpdateOrderStatusDto } from './dto/updateOrderStatus.dto';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderRepository)
        private orderRepository: OrderRepository,
    ) { }

    createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderRepository.createOrder(createOrderDto)
    }

    updateOrderStatus(updateOrderStatusDto: UpdateOrderStatusDto, id: string): Promise<Order> {
        return this.orderRepository.updateOrderStatus(updateOrderStatusDto, id)
    }

    updateOrderEdit(updateOrderEditDto: UpdateOrderEditDto, id: string): Promise<Order> {
        return this.orderRepository.updateOrderEdit(updateOrderEditDto, id)
    }

    deleteOrder(id: string) {
        return this.orderRepository.deleteOrder(id)
    }
}
