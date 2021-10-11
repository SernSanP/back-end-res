import { IsNotEmpty, IsString } from "class-validator";

export class CreateQueueTakeOutDto {
    @IsNotEmpty()
    @IsString()
    queue_group: string

    @IsNotEmpty()
    @IsString()
    delivery_by: string
}
