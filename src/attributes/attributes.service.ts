import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { plainToClass } from "class-transformer";
import { AttributesModel } from "./attributes.model";

@Injectable()
export class AttributesService {

    constructor(@InjectModel(AttributesModel) private attributesModel: typeof AttributesModel) {}

    // async createClass(attributesDto: AttributesDto): Promise<any> {
    //     const model = plainToClass(ClassModel, attributesDto)
    //     return model.save()
    // }

    // async getClassById(id: number): Promise<ClassListingDto> {
    //     return this.classModel.findOne({ where: { id: id } })
    // }

    // async getClassList(): Promise<ClassListingDto[]> {
    //     return this.classModel.findAll()
    // }
}