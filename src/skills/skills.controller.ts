import { Controller, Get, Post, Put, Body } from "@nestjs/common";
import { SkillsDto } from "./dto/skills.dto";
import { SkillsService } from "./skills.service";

@Controller('skills')
export class SkillsController {

    constructor(private readonly skillsService: SkillsService){}

    @Get()
    getSkillsList(): Promise<SkillsDto[]> {
        return this.skillsService.getSkillsList();
    }

    // @Get('/:powerId')
    // getPowerById(){
    //     return "Get Power By Id"
    // }

    @Post()
    createSkill(@Body() body: SkillsDto){
        return this.skillsService.createSkill(body);
    }

    // @Put(':/powerId')
    // updatePower(){
    //     return "Update Power"
    // }

}