import { Param } from "@nestjs/common";
import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "src/system/authentication/guards/auth.guard";
import { AttributesService } from "./attributes.service";

@Controller('attributes')
@UseGuards(AuthGuard)
export class AttributesController {
    constructor(private readonly attributesService: AttributesService) { }

    // @Post()
    // @UsePipes(new ValidationPipe())
    // async createClass(@Body() classCreationDto: ClassCreationDto): Promise<any> {
    //     return await this.classService.createClass(classCreationDto)
    // }

    // @Get()
    // async getClassList(): Promise<any> {
    //     return this.classService.getClassList()
    // }

    // @Get('/:classId')
    // async getClassById(@Param('classId') id: number): Promise<any> {
    //     return this.classService.getClassById(id)

    // }

}