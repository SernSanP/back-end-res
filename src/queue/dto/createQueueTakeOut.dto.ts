import { IsNotEmpty, IsString } from "class-validator";

export class CreateQueueTakeOutDto {
    @IsNotEmpty()
    @IsString()
    queue_group: string

}
