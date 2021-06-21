import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HeroesDto } from './dto/heroes.dto';
import { HeroesModel } from './heroes.model';

@Injectable()
export class HeroesService {

    constructor(@InjectModel(HeroesModel)
    private heroesModel: typeof HeroesModel) { // Difference between that and: private heroesModel: HeroesModel
    }

    async getHeroesList(): Promise<HeroesDto[]>{
        return this.heroesModel.findAll();
    }

    // getHeroById(id: number): HeroesDto{
    //     return this.heroes[id];
    // }

    /**
     * TODO: Create constructor for this
     **/ 
    newHero(body: HeroesDto){
        const model = new this.heroesModel();
        Object.assign(model, body)
        model.createdAt = new Date();
        model.createdBy = "User";

        return model.save()
    }

}
