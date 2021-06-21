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

    newHero(body: HeroesDto){
        let model: HeroesModel = new HeroesModel();

        Object.assign(body, model)
        // model.createdAt = new Date()

        // Object.assign(body, model)
        return model;
        // this.heroesModel.create(model)
    }

}
