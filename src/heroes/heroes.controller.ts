import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { HeroesDto } from "./dto/heroes.dto";

@Controller('heroes')
export class HeroesController {

    // Used for testing purposes, should be deleted after
    // the database starts being used
    heroes: HeroesDto[] = [
        new HeroesDto("Thor Odinson", "Aesir", "Unknown", "Male", "Warrior", "Gods"),
        new HeroesDto("Odin Borson", "Aesir", "Unknown", "Male", "Warrior", "Gods"),
        new HeroesDto("Loki Farbauti", "Jotun", "Unknown", "Male", "Warrior", "Gods")
    ]

    @Get()
    getHeroes(): HeroesDto[] {
        return this.heroes;
    }

    @Get('/:heroId')
    getHeroById(
        @Param('heroId') heroId: String) {
        return "Get Hero By Id"
    }

    @Post()
    createHero(@Body() body: HeroesDto){
        console.log(body)
        return `Create Hero: ${JSON.stringify(body)}` 
    }

    @Put(':/heroId')
    updateHero(
        @Param('heroID') heroId: string,
        @Body() body){
        return "Update Hero"
    }
}

