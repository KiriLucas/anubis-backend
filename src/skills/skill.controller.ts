import { Controller, Get, Post, Put, Body, Param } from "@nestjs/common";
import { SkillDto } from "./dto/skill.dto";
import { SkillService } from "./skill.service";

@Controller('skills')
export class SkillController {

    constructor(private readonly skillService: SkillService){}
    
    @Get()
    getSkillList(): Promise<SkillDto[]> {
        return this.skillService.getSkillList();
    }

    @Post()
    createSkill(@Body() body: SkillDto){
        return this.skillService.createSkill(body);
    }

    @Put('/:skillId/')
    async updateSkill(@Param('skillId') id, @Body() body: SkillDto) {
        return this.skillService.updateSkill(id, body)
    }

}