import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { InventoryModel } from "./inventory.model";

@Injectable()
export class InventoryService {

    constructor(@InjectModel(InventoryModel) private itemsModel: typeof InventoryModel) { }

    async addItemToInventory(itemId: number, amount: number, characterId) {
        //search for item id and fill ItemDTO with it
        //get character attributes for carryingCapacity
        //get character current weight (sum all items on inventory), can't add above the max weight
        // currentWeight/carryingCapacity || CURRENT/MAX || 120/300

        //if item exists and player is not overweigthed, adds item to ItemModel with characterId
    }

    async removeItemFromInventory(itemId: number, characterId, amount) {

        //if player has item, removes it from ItemModel based on characterId
    }

}