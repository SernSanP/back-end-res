import { IsNotEmpty, IsString } from "class-validator";

export class CreateQueueDeliveryDto {
    @IsNotEmpty()
    @IsString()
    delivery_by: string

    @IsNotEmpty()
    @IsString()
    queue_group: string

}