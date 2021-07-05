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
        const heroList = new DetailedHeroListingDto()
        const raceRequest = await this.requestUtils.requestObjectGet(Constants.GET_RACE, hero.raceId, user)
        const classRequest = await this.requestUtils.requestObjectGet(Constants.GET_CLASS, hero.classId, user)
        const attributesRequest = await this.requestUtils.requestObjectGet(Constants.GET_ATTRIBUTES, hero.classId, user)

        const race = await (await this.httpService.get(raceRequest.url, raceRequest.header).toPromise()).data
        const characterClass = await (await this.httpService.get(classRequest.url, classRequest.header).toPromise()).data
        const attributes = await (await this.httpService.get(attributesRequest.url, attributesRequest.header).toPromise()).data
        const origin = { name: "Placeholder" }
        const energyType = { name: "Placeholder" }

        heroList.userId = hero.userId
        heroList.name = hero.name
        heroList.gender = hero.gender
        heroList.age = hero.age
        heroList.race = race.name
        heroList.characterClass = characterClass.name
        heroList.origin = origin.name
        heroList.energyType = energyType.name
        heroList.maxHp = attributes.maxHp
        heroList.maxEnergy = attributes.maxEnergy
        heroList.carryingCapacity = attributes.carryingCapacity

        return heroList
    }

    async getDetailedHeroList(user: UserResponseDto): Promise<DetailedHeroListingDto[]> {
        const heroList: HeroDto[] = await this.getRawHeroList()
        const detailedList: DetailedHeroListingDto[] = [];

        for (let i in heroList) {
            const teste = await this.getHeroData(heroList[i], user)
            detailedList.push(teste)
        }

        return detailedList
    }

    async createHero(heroCreationDto: HeroCreationDto, user: UserResponseDto) {

        // TODO: Create validator class
        const raceRequest = await this.requestUtils.requestObjectGet(Constants.GET_RACE, heroCreationDto.raceId, user)
        const classRequest = await this.requestUtils.requestObjectGet(Constants.GET_CLASS, heroCreationDto.classId, user)
        const attributesRequest = await this.requestUtils.requestObjectPost(Constants.CREATE_ATTRIBUTES, user)

        const characterRace: RaceDto = await (await this.httpService.get(raceRequest.url, raceRequest.header).toPromise()).data
        const characterClass: ClassDto = await (await this.httpService.get(classRequest.url, classRequest.header).toPromise()).data

        // TODO: If none of the above are invalid, then:
        const model = plainToClass(this.heroModel, heroCreationDto)
        model.userId = user.id
        model.createdBy = user.id
        model.energyType = 1 // This should be taken from "class energy type"

        try {
            const character = await model.save()
            const characterAttributes = this.setAttributesForCreation(character.heroId, characterRace, characterClass);

            await (await this.httpService.post(attributesRequest.url, characterAttributes, attributesRequest.header).toPromise()).data

            return `Hero was created by ${user.username} - Hero id: ${character.heroId}`
        } catch (error) {
            return `error`
        }




        const username = ""
        const origin = ""
        const energyType = ""

        //! Chamar aqui criação de atributos, enviar: character_id, race_id e class_id, a criação de atributos vai procurar pelos respectivos ids
        //! chamar outro método pra calcular os atributos a partir de raça, classe etc... Vai então devolver um heroAttributes que servirá para chamar
        //! um terceiro método que irá criar no serviço de atributos uma linha na tabela STATS, que possuirá id do usuário, max_hp, max_weight, etc...
        //! Essa tabela também possuirá HP e ENERGIA atuais, e no momento da criação, energia e HP serão idênticos se já não houver registro com id de personagem.

        //? Criar função que cria os atributos do personagem (um registro de atributo por personagem)
        //? Essa função chamará o serviço de atributos através de uma request, recebendo user, race, characterClass e attributeCreationDto e parecerá com o seguinte:
        //? async setCharacterAttributes(user: UserResponseDto, race: RaceListingDto, character: characterClassListingDto)

        //! Search and validate: raceId, classId, originId, energyType

    }

    setAttributesForCreation(id: number, race: RaceDto, characterClass: ClassDto): NewAttributesDto {

        const attributes: NewAttributesDto = {
            characterId: id,
            strength: race.strength_bonus + characterClass.strength_bonus,
            dexterity:race.dexterity_bonus + characterClass.dexterity_bonus,
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
