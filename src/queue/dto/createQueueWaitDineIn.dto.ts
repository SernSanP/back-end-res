import { IsNotEmpty, IsString } from "class-validator";

export class CreateQueueWaitDineInDto {
    @IsNotEmpty()
    @IsString()
    queue_group: string

}
