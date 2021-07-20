import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { plainToClass } from "class-transformer";
import { ItemCategoryService } from "./category.service";
import { ItemCategoryDTO } from "./dtos/category.dto";
import { ItemDTO } from "./dtos/item.dto";
import { ItemModel } from "./item.model";

@Injectable()
export class ItemService {
    constructor(@InjectModel(ItemModel) private itemModel: typeof ItemModel,
    private categoryService: ItemCategoryService) { }

    async createItem(item: ItemDTO) {
        const model = plainToClass(ItemModel, item)
        return model.save()
    }

    async createItemCategory(category: ItemCategoryDTO) {
        this.categoryService.createItemCategory(category)
    }

    async getAllItems(): Promise<ItemDTO[]> {    
        return this.itemModel.findAll();
    }

}