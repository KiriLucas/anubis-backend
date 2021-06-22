import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { HeroDto } from "../dto/hero.dto";
import { HeroService } from "./hero.service";


@Controller('heroes')
export class HeroController {
    constructor(private readonly heroService: HeroService){}

    @Get()
    async getHeroesList(): Promise<HeroDto[]> {
        return this.heroService.getHeroesList();
    }

    // @Get('/:heroId')
    // getHeroById(
    //     @Param('heroId') heroId: number): HeroesDto {
    //     return this.heroes[heroId]
    // }

    @Post()
    createHero(@Body() body: HeroDto){
        return this.heroService.newHero(body)
    }

    // @Put(':/heroId')
    // updateHero(
    //     @Param('heroID') heroId: string,
    //     @Body() body){
    //     return "Update Hero"
    // }
}

