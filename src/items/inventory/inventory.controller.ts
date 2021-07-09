import { Controller, Get, Param } from "@nestjs/common";
import { AddItemDTO } from "./dtos/addItem.dto";
import { InventoryInfoDTO } from "./dtos/inventoryInfo.dto";
import { RemoveItemDTO } from "./dtos/removeItem.dto";
import { InventoryService } from "./inventory.service";

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    async addItemToCharacterInventory(addItem: AddItemDTO) {
        return this.inventoryService.addItemToCharacterInventory(addItem);
    }

    async removeItemFromCharacterInventory(removeItem: RemoveItemDTO) {
        return this.inventoryService.removeItemFromCharacterInventory(removeItem)
    }

    @Get(':/characterId')
    async getInventoryInfo(@Param('characterId') id: number): Promise<InventoryInfoDTO>{
        return this.inventoryService.getInventoryInfo(id)
    }
}