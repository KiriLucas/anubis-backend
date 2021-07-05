import { Param } from "@nestjs/common";
import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "src/system/authentication/guards/auth.guard";
import { RaceCreationDto } from "./dtos/raceCreation.dto";
import { RaceListingDto } from "./dtos/raceListing.dto";
import { RaceService } from "./race.service";

@Controller('races')
@UseGuards(AuthGuard)
export class RaceController {
    constructor(private readonly raceService: RaceService) { }

    @Post()
    @UsePipes(new ValidationPipe())
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