import { IsNotEmpty } from "class-validator";

export class ItemCategoryDTO {
    @IsNotEmpty()
    name: string;
}