import { Body, Controller, Get, Post } from "@nestjs/common";
import { ItemCategoryDTO } from "./dtos/category.dto";
import { ItemDTO } from "./dtos/item.dto";
import { ItemService } from "./item.service";

@Controller('items')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }

    @Post()
    async createItem(@Body() item: ItemDTO) {
        return this.itemService.createItem(item)
    } 

    @Post('/category')
    async createItemCategory(@Body() category: ItemCategoryDTO){
        await this.itemService.createItemCategory(category)
     }

    @Get()
    async getAllItems(): Promise<ItemDTO[]> {
        return this.itemService.getAllItems()
    }
}