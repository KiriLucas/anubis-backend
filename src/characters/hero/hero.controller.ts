import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { User } from "src/system/user/decorators/user.decorator";
import { UserResponseDto } from "src/system/user/dtos/userResponse.dto";
import { UserModel } from "src/system/user/user.model";
import { DetailedHeroListingDto } from "./dtos/detailedHeroListing.dto";
import { HeroCreationDto } from "./dtos/heroCreation.dto";
import { HeroDto } from "./dtos/hero.dto";
import { HeroService } from "./hero.service";


@Controller('heroes')
export class HeroController {
    constructor(private readonly heroService: HeroService) {}

    @Get('/raw-list')
    async getRawHeroList(): Promise<HeroDto[]> {
        return this.heroService.getRawHeroList();
    }

    @Get('/detailed-list')
    async getDetailedHeroList(@User() user: UserResponseDto): Promise<DetailedHeroListingDto[]> {
        return this.heroService.getDetailedHeroList(user);
    }

    // @Get(':/heroId')
    // async getHeroById(@Param('heroId') id: number): Promise<HeroListingDto> {
    //     return this.heroService.getHeroById(id)
    // }


    @Post()
    async createHero(@Body() heroCreationDto: HeroCreationDto, @User() user: UserResponseDto) {
        return this.heroService.createHero(heroCreationDto, user)
    }
}

