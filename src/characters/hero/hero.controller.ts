import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { HeroCreationDto } from "./dtos/heroCreation.dto";
import { HeroListingDto } from "./dtos/heroListing.dto";
import { HeroService } from "./hero.service";


@Controller('heroes')
export class HeroController {
    constructor(private readonly heroService: HeroService) {}

    @Get()
    async getHeroList(): Promise<HeroListingDto[]> {
        return this.heroService.getHeroList();
    }

    @Post()
    createHero(@Body() body: HeroCreationDto) {
        return this.heroService.createHero(body)
    }
}

