import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ItemModel } from "./item.model";

@Injectable()
export class ItemService {
    constructor(@InjectModel(ItemModel) private itemsModel: typeof ItemModel) { }
}