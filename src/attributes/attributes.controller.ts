import { Param } from "@nestjs/common";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { AttributesService } from "./attributes.service";
import { AttributesCreationDto } from "./dtos/attributes.dto";

@Controller('attributes')
export class AttributesController {
    constructor(private readonly attributesService: AttributesService) { }

    @Post()
    async createCharacterAttributes(@Body() newAttributesDto: AttributesCreationDto): Promise<any> {
        return await this.attributesService.createCharacterAttributes(newAttributesDto)
    }

    // @Get('/:characterId')
    // async getClassById(@Param('characterId') id: number): Promise<AttributesDto> {
    //     return this.attributesService.getAttributesByCharacterId(id)

    // }

}