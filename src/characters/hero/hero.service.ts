import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HeroDto } from './dtos/hero.dto';
import { HeroModel } from './hero.model';

@Injectable()
export class HeroService {

    constructor(@InjectModel(HeroModel)
    private heroModel: typeof HeroModel) { // Difference between that and: private heroesModel: HeroesModel
    }

    async getHeroList(): Promise<HeroDto[]>{
        return await this.heroModel.findAll();
    }

    // getHeroById(id: number): HeroesDto{
    //     return this.heroes[id];
    // }

    /**
     * TODO: Create constructor for this
     **/ 
    createHero(body: HeroDto){
        const model = new this.heroModel();
        Object.assign(model, body)
        model.createdAt = new Date();
        model.createdBy = 'User';

        return model.save()
    }

}
