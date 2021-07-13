import { Controller, Get, Post } from "@nestjs/common";
import { ItemDTO } from "./dtos/item.dto";
import { ItemService } from "./item.service";

@Controller('items')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }

    @Post('/create')
    async createItem(item: ItemDTO) {
        return this.itemService.createItem(item)
    }

    @Get()
    async getAllItems(): Promise<ItemDTO[]> {
        return this.itemService.getAllItems()
    }
}