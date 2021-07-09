import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { AddItemDTO } from "./dtos/addItem.dto";
import { InventoryInfoDTO } from "./dtos/inventoryInfo.dto";
import { RemoveItemDTO } from "./dtos/removeItem.dto";
import { InventoryModel } from "./inventory.model";

@Injectable()
export class InventoryService {

    constructor(@InjectModel(InventoryModel) private itemsModel: typeof InventoryModel) { }

    async addItemToCharacterInventory(addItem: AddItemDTO) {
        //search for item id and fill ItemDTO with it
        //get character attributes for carryingCapacity
        //get character current weight (sum all items on inventory), can't add above the max weight
        // currentWeight/carryingCapacity || CURRENT/MAX || 120/300

        //if item exists and player is not overweighted, adds item to ItemModel with characterId
    }

    async removeItemFromCharacterInventory(removeItem: RemoveItemDTO) {

        //if player has item, removes it from ItemModel based on characterId
    }

    async getInventoryInfo(characterId: number): Promise<InventoryInfoDTO> {
        return "" as any
    }

}