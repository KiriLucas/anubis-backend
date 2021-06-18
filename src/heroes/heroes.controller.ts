import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { HeroesDto } from "./dto/heroes.dto";
import { HeroesService } from "./heroes.service";

@Controller('heroes')
export class HeroesController {

    service = new HeroesService();

    @Get()
    getHeroes(): HeroesDto[] {
        return this.service.getHeroes();
    }

    // @Get('/:heroId')
    // getHeroById(
    //     @Param('heroId') heroId: number): HeroesDto {
    //     return this.heroes[heroId]
    // }

    // @Post()
    // createHero(@Body() body: HeroesDto){
    //     this.heroes.push(body)
    // }

    @Put(':/heroId')
    updateHero(
        @Param('heroID') heroId: string,
        @Body() body){
        return "Update Hero"
    }
}

