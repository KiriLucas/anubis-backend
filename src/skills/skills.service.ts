import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { SkillsDto } from "./dto/skills.dto";
import { SkillsModel } from "./skills.model";

@Injectable()
export class SkillsService {
    
    constructor(@InjectModel(SkillsModel)
    private skillsModel: typeof SkillsModel){
    }

    async getSkillsList(): Promise<SkillsDto[]> {
        return this.skillsModel.findAll();
    }

    createSkill(body: SkillsDto){
        const model = new this.skillsModel();
        Object.assign(model, body)

        model.createdAt = new Date();
        model.createdBy = "User";

        return model.save()
    }


}