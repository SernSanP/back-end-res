import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentDto } from './dto/createpPayment.dto';
import { Payment } from './payment.entity';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(PaymentRepository)
        private paymentRepository: PaymentRepository,
    ) { }

    createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        return this.paymentRepository.createPayment(createPaymentDto);
    }
}
