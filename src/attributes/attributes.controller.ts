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

    @Get('/:characterId')
    async getClassById(@Param('characterId') id: number): Promise<AttributesDto> {
        return this.attributesService.getAttributesByCharacterId(id)

    }

}