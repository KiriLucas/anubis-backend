import { Param } from "@nestjs/common";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { RaceCreationDto } from "./dtos/raceCreation.dto";
import { RaceListingDto } from "./dtos/raceListing.dto";
import { RaceService } from "./race.service";

@Controller('races')
export class RaceController {
    constructor(private readonly raceService: RaceService) { }

    @Post()
    async createRace(@Body() raceCreationDto: RaceCreationDto): Promise<any> {
        return await this.raceService.createRace(raceCreationDto)
    }

    @Get()
    async getRaceList(): Promise<RaceListingDto[]> {
        return this.raceService.getRaceList()
    }

    @Get('/:raceId')
    async getRaceById(@Param('raceId') id: number): Promise<any> {
        return this.raceService.getRaceById(id)

    }

}