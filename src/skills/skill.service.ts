import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { SkillDto } from "./dto/skill.dto";
import { SkillModel } from "./skill.model";

@Injectable()
export class SkillService {
    
    constructor(@InjectModel(SkillModel)
    private skillModel: typeof SkillModel){
    }

    async getSkillList(): Promise<SkillDto[]> {
        return this.skillModel.findAll();
    }

    async getSkillById(id): Promise<SkillModel> {
        return this.skillModel.findOne(id);
    }

    createSkill(body: SkillDto){
        const model = new this.skillModel();
        Object.assign(model, body)

        model.createdAt = new Date();
        model.createdBy = "User";

        return model.save()
    }

    async updateSkill(id: number, body: SkillDto){ //
        const model =  await this.getSkillById(id);
        Object.assign(model, body)

        return await model.save();
    }

}