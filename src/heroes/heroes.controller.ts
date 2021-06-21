import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { HeroesDto } from "./dto/heroes.dto";
import { HeroesService } from "./heroes.service";

@Controller('heroes')
export class HeroesController {
    constructor(private readonly heroesService: HeroesService){}

    @Get()
    async getHeroesList(): Promise<HeroesDto[]> {
        return this.heroesService.getHeroesList();
    }

    // @Get('/:heroId')
    // getHeroById(
    //     @Param('heroId') heroId: number): HeroesDto {
    //     return this.heroes[heroId]
    // }

    @Post()
    createHero(@Body() body: HeroesDto){
        return this.heroesService.newHero(body)
    }

    // @Put(':/heroId')
    // updateHero(
    //     @Param('heroID') heroId: string,
    //     @Body() body){
    //     return "Update Hero"
    // }
}

