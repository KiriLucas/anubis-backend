import { Param } from "@nestjs/common";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ClassCreationDto } from "./dtos/classCreation.dto";
import { ClassListingDto } from "./dtos/classListing.dto";
import { ClassService } from "./rclass.service";

@Controller('classes')
export class ClassController {
    constructor(private readonly classService: ClassService) { }

    @Post()
    async createClass(@Body() classCreationDto: ClassCreationDto): Promise<any> {
        return await this.classService.createClass(classCreationDto)
    }

    @Get()
    async getClassList(): Promise<ClassListingDto[]> {
        return this.classService.getClassList()
    }

    @Get('/:classId')
    async getClassById(@Param('classId') id: number): Promise<any> {
        return this.classService.getClassById(id)

    }

}