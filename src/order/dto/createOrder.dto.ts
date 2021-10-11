import { IsNotEmpty, IsString } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    category: string

    @IsNotEmpty()
    @IsString()
    queue_id: string

    // topping: string[]
}
