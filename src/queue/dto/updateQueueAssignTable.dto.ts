import { IsNotEmpty, IsString } from "class-validator";

export class UpdateQueueAssignTableDto {
    @IsNotEmpty()
    @IsString()
    table_id: string

    @IsNotEmpty()
    @IsString()
    queue_group: string

}
