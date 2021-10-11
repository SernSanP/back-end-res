import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderEditDto } from './dto/updateOrderEdit.dto';
import { UpdateOrderStatusDto } from './dto/updateOrderStatus.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Post()
    createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.createOrder(createOrderDto)
    }

    @Patch('/status/:id')
    updateOrderStatus(@Param('id') id: string, @Body() updateOrderStatusDto: UpdateOrderStatusDto): Promise<Order> {
        return this.orderService.updateOrderStatus(updateOrderStatusDto, id)
    }

    @Patch('/edit/:id')
    updateOrderEdit(@Param('id') id: string, @Body() updateOrderEditDto: UpdateOrderEditDto): Promise<Order> {
        return this.orderService.updateOrderEdit(updateOrderEditDto, id)
    }

    @Delete('/delete/:id')
    deleteOrder(@Param('id') id: string) {
        return this.orderService.deleteOrder(id)
    }
}
