import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { HeroDto } from "../dto/hero.dto";
import { HeroService } from "./hero.service";


@Controller('heroes')
export class HeroController {
    constructor(private readonly heroService: HeroService) {}

    @Get()
    async getHeroList(): Promise<HeroDto[]> {
        return this.heroService.getHeroList();
    }

    @Post()
    createHero(@Body() body: HeroDto) {
        return this.heroService.createHero(body)
    }
}

