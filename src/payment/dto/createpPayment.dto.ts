import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentDto {
    @IsNotEmpty()
    @IsString()
    payer_name: string

    @IsNotEmpty()
    @IsString()
    payer_account: string

    @IsNotEmpty()
    @IsString()
    method: string

    @IsNotEmpty()
    @IsString()
    total_payed: string

    @IsNotEmpty()
    @IsString()
    queue_number: string
}
