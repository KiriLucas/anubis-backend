import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { AddItemDTO } from "./dtos/addItem.dto";
import { InventoryInfoDTO } from "./dtos/inventoryInfo.dto";
import { RemoveItemDTO } from "./dtos/removeItem.dto";
import { InventoryModel } from "./inventory.model";

@Injectable()
export class InventoryService {

    constructor(@InjectModel(InventoryModel) private inventoryModel: typeof InventoryModel) { }

    async giveItem(item: AddItemDTO, characterId) {
    }

    async removeItem(item: RemoveItemDTO) {
    }

    async getInventory(characterId: number): Promise<InventoryInfoDTO> {
        return "" as any
    }

}