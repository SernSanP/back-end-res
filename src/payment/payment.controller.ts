import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/createpPayment.dto';
import { Payment } from './payment.entity';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    @Post()
    createPayment(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
        return this.paymentService.createPayment(createPaymentDto);
    }
}
