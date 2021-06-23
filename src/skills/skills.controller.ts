import { Controller, Get, Post, Put, Body, Param } from "@nestjs/common";
import { SkillsDto } from "./dto/skills.dto";
import { SkillsService } from "./skills.service";

@Controller('skills')
export class SkillsController {

    constructor(private readonly skillsService: SkillsService){}
    
    @Get()
    getSkillsList(): Promise<SkillsDto[]> {
        return this.skillsService.getSkillsList();
    }

    @Post()
    createSkill(@Body() body: SkillsDto){
        return this.skillsService.createSkill(body);
    }

    @Put('/:skillId/')
    async updateSkill(@Param('skillId') id, @Body() body: SkillsDto) {
        return this.skillsService.updateSkill(id, body)
    }

}