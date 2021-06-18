import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { HeroesDto } from "./dto/heroes.dto";

@Controller('heroes')
export class HeroesController {

    @Get()
    getHeroes(): HeroesDto {
        return "All heroes"
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

