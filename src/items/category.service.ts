import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass } from 'class-transformer';
import { ItemCategoryModel } from './category.model';
import { ItemCategoryDTO } from './dtos/category.dto';

@Injectable()
export class ItemCategoryService {
    constructor(@InjectModel(ItemCategoryModel) private itemCategoryModel: typeof ItemCategoryModel) { }

    async createItemCategory(category: ItemCategoryDTO) {
        const model: ItemCategoryModel = plainToClass(ItemCategoryModel, category)
        model.save()
    }

}
