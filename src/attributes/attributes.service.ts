import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { plainToClass } from "class-transformer";
import { AttributesModel } from "./attributes.model";
import { AttributesDto } from "./dtos/attributes.dto";
import { NewAttributesDto } from "./dtos/newAttributes.dto";

@Injectable()
export class AttributesService {

    constructor(@InjectModel(AttributesModel) private attributesModel: typeof AttributesModel) {}

    async createCharacterAttributes(newAttributesDto: NewAttributesDto): Promise<any> {
        console.log(newAttributesDto)
        // const model = plainToClass(AttributesModel, attributesDto)
        // return model.save()
    }

    // async getClassById(id: number): Promise<ClassListingDto> {
    //     return this.classModel.findOne({ where: { id: id } })
    // }

    // async getClassList(): Promise<ClassListingDto[]> {
    //     return this.classModel.findAll()
    // }
}