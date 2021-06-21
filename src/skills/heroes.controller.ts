import { Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller('powers/:powerId/heroes')
export class HeroPowersController {

    @Get()
    getHeroes(){
        return "Get Heroes With Specific Power"
    }

    @Put(':/heroId')
    updatePower(
        @Param('powerId') powerId: string,
        @Param('heroId') heroId: string
    ){
        return "Update Hero Power"
    }

}