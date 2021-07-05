import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass } from 'class-transformer';
import { UserResponseDto } from 'src/system/user/dtos/userResponse.dto';
import { DetailedHeroListingDto } from './dtos/detailedHeroListing.dto';
import { HeroCreationDto } from './dtos/heroCreation.dto';
import { HeroDto } from './dtos/hero.dto';
import { HeroModel } from './hero.model';
import { NewAttributesDto } from 'src/attributes/dtos/newAttributes.dto';
import { RequestUtils } from 'src/utils/requests.utils';
import { Constants } from 'src/utils/constants';
import { RaceDto } from './dtos/race.dto';
import { ClassDto } from './dtos/characterClass.dto';

@Injectable()
export class HeroService {

    constructor(@InjectModel(HeroModel) private heroModel: typeof HeroModel,
        private httpService: HttpService,
        private requestUtils: RequestUtils) { }

    async getRawHeroList(): Promise<HeroDto[]> {
        const hero = plainToClass(HeroDto, await this.heroModel.findAll())
        return hero
    }

    async getHeroData(hero: HeroDto, user: UserResponseDto): Promise<DetailedHeroListingDto> {
        const raceRequest = await this.requestUtils.requestObjectGet(Constants.GET_RACE, hero.raceId, user)
        const classRequest = await this.requestUtils.requestObjectGet(Constants.GET_CLASS, hero.classId, user)
        const attributesRequest = await this.requestUtils.requestObjectGet(Constants.GET_ATTRIBUTES, hero.classId, user)
        
        const race = await (await this.httpService.get(raceRequest.url, raceRequest.header).toPromise()).data
        const characterClass = await (await this.httpService.get(classRequest.url, classRequest.header).toPromise()).data
        const attributes = await (await this.httpService.get(attributesRequest.url, attributesRequest.header).toPromise()).data
        const origin = { name: "Placeholder" }
        const energyType = { name: "Placeholder" }
        
        const heroList: DetailedHeroListingDto = {
            userId: hero.userId,
            name: hero.name,
            gender: hero.gender,
            age: hero.age,
            race: race.name,
            characterClass: characterClass.name,
            origin: origin.name,
            energyType: energyType.name,
            maxHp: attributes.maxHp,
            maxEnergy: attributes.maxEnergy,
            carryingCapacity: attributes.carryingCapacity
        }

        return heroList
    }

    async getDetailedHeroList(user: UserResponseDto): Promise<DetailedHeroListingDto[]> {
        const heroList: HeroDto[] = await this.getRawHeroList()
        const detailedList: DetailedHeroListingDto[] = [];

        for (const character in heroList) {
            const hero = await this.getHeroData(heroList[character], user)
            detailedList.push(hero)
        }

        return detailedList
    }

    async createHero(heroCreationDto: HeroCreationDto, user: UserResponseDto) {

        // TODO: Create validator class
        const raceRequest = await this.requestUtils.requestObjectGet(Constants.GET_RACE, heroCreationDto.raceId, user)
        const classRequest = await this.requestUtils.requestObjectGet(Constants.GET_CLASS, heroCreationDto.classId, user)

        const characterRace: RaceDto = await (await this.httpService.get(raceRequest.url, raceRequest.header).toPromise()).data
        const characterClass: ClassDto = await (await this.httpService.get(classRequest.url, classRequest.header).toPromise()).data

        // TODO: If none of the above are invalid, then:
        const model = plainToClass(this.heroModel, heroCreationDto)
        model.userId = user.id
        model.createdBy = user.id
        model.energyType = 1 // This should be taken from "class energy type"

        try {
            const character = await model.save()
            const attributesRequest = await this.requestUtils.requestObjectPost(Constants.CREATE_ATTRIBUTES, user)
            const characterAttributes = this.setAttributesForCreation(character.heroId, characterRace, characterClass);

            await (await this.httpService.post(attributesRequest.url, characterAttributes, attributesRequest.header).toPromise()).data

            return `Hero was created by ${user.username} - Hero id: ${character.heroId}`
        } catch (error) {
            return `error`
        }
    }

    setAttributesForCreation(id: number, race: RaceDto, characterClass: ClassDto): NewAttributesDto {
        const attributes: NewAttributesDto = {
            characterId: id,
            strength: race.strength_bonus + characterClass.strength_bonus,
            dexterity: race.dexterity_bonus + characterClass.dexterity_bonus,
            agility: race.agility_bonus + characterClass.agility_bonus,
            intelligence: race.intelligence_bonus + characterClass.intelligence_bonus,
            vitality: race.vitality_bonus + characterClass.vitality_bonus,
            charisma: race.charisma_bonus + characterClass.charisma_bonus,
            wisdom: race.wisdom_bonus + characterClass.wisdom_bonus,
            will: race.will_bonus + characterClass.will_bonus,
        }

        return attributes
    }

}
