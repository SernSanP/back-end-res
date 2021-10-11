import { IsNotEmpty, IsString } from "class-validator";

export class UpdateOrderEditDto {
    @IsNotEmpty()
    @IsString()
    category: string

    // @IsNotEmpty()
    // topping: string[]
}
