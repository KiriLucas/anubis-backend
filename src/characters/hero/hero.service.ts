import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { raw } from 'express';
import { UserResponseDto } from 'src/system/user/dtos/userResponse.dto';
import { UserModel } from 'src/system/user/user.model';
import { DetailedHeroListingDto } from './dtos/detailedHeroListing.dto';
import { HeroCreationDto } from './dtos/heroCreation.dto';
import { HeroDto } from './dtos/hero.dto';
import { HeroModel } from './hero.model';

@Injectable()
export class HeroService {

    RACE_URL = 'races/'

    messages: string[] = ['test1', 'test2', 'test3']

    constructor(@InjectModel(HeroModel) private heroModel: typeof HeroModel, private httpService: HttpService) { }

    async getRawHeroList(): Promise<HeroDto[]> {
        const hero = plainToClass(HeroDto, await this.heroModel.findAll())
        return hero
    }

    async getLocalUrl(url: string, path: string) {
    }

    async getHeaders(user: UserResponseDto) {
        return { 'Authorization': `Token ${user.token}` }
    }

    // TODO: Refactor method name, as well as dto naming
    async getHeroData(hero: HeroDto, user: UserResponseDto): Promise<DetailedHeroListingDto> {
        const heroList = new DetailedHeroListingDto()

        //! Create request method
        const race = await (await this.httpService.get(process.env.URL + this.RACE_URL + hero.raceId, { headers: await this.getHeaders(user) }).toPromise()).data
        const characterClass = { name: "Placeholder" }
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
        heroList.maxHp = hero.maxHp
        heroList.maxEnergy = hero.maxEnergy
        heroList.carryingCapacity = hero.carryingCapacity

        return heroList
    }

    async getDetailedHeroList(user: UserResponseDto): Promise<DetailedHeroListingDto[]> {
        const heroList: HeroDto[] = await this.getRawHeroList()
        const detailedList: DetailedHeroListingDto[] = [];

        for (let i in heroList) {
            const teste = await this.getHeroData(heroList[i], user)
            detailedList.push(teste)
        }

        return detailedList as any
    }
    // async getHeroById(id: number): Promise<HeroListingDto> {
    //     return await this.heroModel.findOne({ where: { id: id } })
    // }

    /**
     * TODO: Create constructor for this
     **/
    async createHero(heroCreationDto: HeroCreationDto, user: UserResponseDto) {
        const requestHeader = { 'Authorization': `Token ${user.token}` }

        // const currentUser = await (await this.httpService.get('http://localhost:3000/users/user', { headers: requestHeader }).toPromise()).data

        const model = plainToClass(this.heroModel, heroCreationDto)
        model.createdBy = user.id

        const username = ""
        const race = ""
        const characterClass = ""
        const origin = ""
        const energyType = ""


        //! Search and validate: raceId, classId, originId, energyType


        // userId: number;
        // name: string;
        // gender: string;
        // age: number;
        // raceId: number;
        // classId: number;
        // originId: number;
        // energyType: number;
        // maxHp: number;
        // maxEnergy: number;
        // carryingCapacity: number;
        // createdBy: number;
        // createdAt: Date;
        // updatedBy?: number;
        // updatedAt?: Date;


        // return user as any
        model.save()
        return `${heroCreationDto.name} was created by NOME`
    }

}
