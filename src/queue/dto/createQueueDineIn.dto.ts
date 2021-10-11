import { IsNotEmpty, IsString } from "class-validator";

export class CreateQueueDineInDto {
    @IsNotEmpty()
    @IsString()
    table_id: string

    @IsNotEmpty()
    @IsString()
    queue_group: string

}
