import { Param } from "@nestjs/common";
import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "src/system/authentication/guards/auth.guard";
import { AttributesService } from "./attributes.service";
import { AttributesDto } from "./dtos/attributes.dto";
import { NewAttributesDto } from "./dtos/newAttributes.dto";

@Controller('attributes')
@UseGuards(AuthGuard)
export class AttributesController {
    constructor(private readonly attributesService: AttributesService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async createCharacterAttributes(@Body() newAttributesDto: NewAttributesDto): Promise<any> {
        return await this.attributesService.createCharacterAttributes(newAttributesDto)
    }

    // @Get()
    // async getClassList(): Promise<any> {
    //     return this.classService.getClassList()
    // }

    // @Get('/:classId')
    // async getClassById(@Param('classId') id: number): Promise<any> {
    //     return this.classService.getClassById(id)

    // }

}