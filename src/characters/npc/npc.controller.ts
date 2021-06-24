import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { NpcDto } from "./dtos/npc.dto";
import { NpcService } from "./npc.service";


@Controller('npcs')
export class NpcController {
    constructor(private readonly npcService: NpcService){}

    @Get()
    async getNpcList(): Promise<NpcDto[]> {
        return this.npcService.getNpcList();
    }

    @Post()
    createNpc(@Body() body: NpcDto){
        return this.npcService.createNpc(body)
    }

    @Put('/:skillId/')
    async updateNpc(@Param('npcId') id, @Body() body: NpcDto) {
        return this.npcService.updateNpc(id, body)
    }
}

