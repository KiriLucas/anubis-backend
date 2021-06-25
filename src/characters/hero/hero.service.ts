import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HeroCreationDto } from './dtos/heroCreation.dto';
import { HeroListingDto } from './dtos/heroListing.dto';
import { HeroModel } from './hero.model';

@Injectable()
export class HeroService {

    constructor(@InjectModel(HeroModel)
    private heroModel: typeof HeroModel) { // Difference between that and: private heroesModel: HeroesModel
    }

    async getHeroList(): Promise<HeroListingDto[]>{
        return await this.heroModel.findAll();
    }

    // getHeroById(id: number): HeroesDto{
    //     return this.heroes[id];
    // }

    /**
     * TODO: Create constructor for this
     **/ 
    createHero(body: HeroCreationDto){
        const model = new this.heroModel();
        Object.assign(model, body)
        model.createdAt = new Date();
        model.createdBy = 'User';

        return model.save()
    }

}
