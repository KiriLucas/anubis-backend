import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NpcDto } from './dtos/npc.dto';
import { NpcModel } from './npc.model';

@Injectable()
export class NpcService {

    constructor(@InjectModel(NpcModel)
    private npcModel: typeof NpcModel) {
    }

    async getNpcList(): Promise<NpcDto[]>{
        return this.npcModel.findAll();
    }

    async getNpcById(id): Promise<NpcModel> {
        return this.npcModel.findOne(id);
    }

    /**
     * TODO: Create constructor for this
     **/ 
    createNpc(body: NpcDto){
        const model = new this.npcModel();
        Object.assign(model, body)
        model.createdAt = new Date();
        model.createdBy = "User";

        return model.save()
    }
    
    async updateNpc(id: number, body: NpcDto){ //
        const model =  await this.getNpcById(id);
        Object.assign(model, body)

        return await model.save();
    }
}
