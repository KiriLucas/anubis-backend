import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { plainToClass } from "class-transformer";
import { ClassCreationDto } from "./dtos/classCreation.dto";
import { ClassListingDto } from "./dtos/classListing.dto";
import { ClassModel } from "./rclass.model";

@Injectable()
export class ClassService {

    constructor(@InjectModel(ClassModel) private classModel: typeof ClassModel) {}

    async createClass(classCreationDto: ClassCreationDto): Promise<any> {
        const model = plainToClass(ClassModel, classCreationDto)
        return model.save()
    }

    async getClassById(id: number): Promise<ClassListingDto> {
        return this.classModel.findOne({ where: { id: id } })
    }

    async getClassList(): Promise<ClassListingDto[]> {
        return this.classModel.findAll()
    }
}