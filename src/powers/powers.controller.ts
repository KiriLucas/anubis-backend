import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('powers')
export class PowersController {

    @Get()
    getPowers() {
        return "All Powers"
    }

    @Get('/:powerId')
    getPowerById(){
        return "Get Power By Id"
    }

    @Post()
    createPower(){
        return "Create Power"
    }

    @Put(':/powerId')
    updatePower(){
        return "Update Power"
    }

}