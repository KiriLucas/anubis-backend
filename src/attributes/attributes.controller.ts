import { Get, Param } from "@nestjs/common";
import { Body, Controller, Post } from "@nestjs/common";
import { AttributesService } from "./attributes.service";
import { AttributesCreationDTO } from "./dtos/attributesCreation.dto";

@Controller('attributes')
export class AttributesController {
    constructor(private readonly attributesService: AttributesService) { }

    @Post()
    async createCharacterAttributes(@Body() attributesCreationDto: AttributesCreationDTO): Promise<any> { // TODO: change return type
        return await this.attributesService.createCharacterAttributes(attributesCreationDto)
    }

    @Get('/:characterId')
    async getCharacterAttributes(@Param('characterId') characterId){
        return this.attributesService.getCharacterAttributes(characterId)
    }
}