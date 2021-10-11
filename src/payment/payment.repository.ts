import { EntityRepository, Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/createpPayment.dto";
import { Payment } from "./payment.entity";

@EntityRepository(Payment)
export class PaymentRepository extends Repository<Payment> {
    async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        const { payer_name, payer_account, method, total_payed, queue_number } = createPaymentDto
        const payment = this.create({
            payer_account, payer_name, method, total_payed, queue_number
        })
        await this.save(payment)
        return payment
    }
}
