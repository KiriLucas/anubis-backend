import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass } from 'class-transformer';
import { UserResponseDto } from 'src/system/user/dtos/userResponse.dto';
import { DetailedHeroListingDto } from './dtos/detailedHeroListing.dto';
import { HeroCreationDto } from './dtos/heroCreation.dto';
import { HeroDto } from './dtos/hero.dto';
import { HeroModel } from './hero.model';

@Injectable()
export class HeroService {

    GET_RACE = 'races/'
    GET_CLASS = 'classes/'

    messages: string[] = ['test1', 'test2', 'test3']

    constructor(@InjectModel(HeroModel) private heroModel: typeof HeroModel, private httpService: HttpService) { }

    async getRawHeroList(): Promise<HeroDto[]> {
        const hero = plainToClass(HeroDto, await this.heroModel.findAll())
        return hero
    }

    async getRequestObject(url: string, path: number, user: UserResponseDto) {
        const requestUrl = {
            url:
                process.env.URL + url + path,
            header: { headers: { 'Authorization': `Token ${user.token}` } }
        }

        return requestUrl
    }

    // TODO: Refactor method name, as well as dto naming
    async getHeroData(hero: HeroDto, user: UserResponseDto): Promise<DetailedHeroListingDto> {
        const heroList = new DetailedHeroListingDto()
        const raceRequest = await this.getRequestObject(this.GET_RACE, hero.raceId, user)
        const classRequest = await this.getRequestObject(this.GET_CLASS, hero.classId, user)

        //! Create request method
        const race = await (await this.httpService.get(raceRequest.url, raceRequest.header).toPromise()).data
        const characterClass = await (await this.httpService.get(classRequest.url, classRequest.header).toPromise()).data
        // const origin = { name: "Placeholder" }
        // const energyType = { name: "Placeholder" }
        const attributes = {}

        heroList.userId = hero.userId
        heroList.name = hero.name
        heroList.gender = hero.gender
        heroList.age = hero.age
        heroList.race = race.name
        heroList.characterClass = characterClass.name
        // heroList.origin = origin.name
        // heroList.energyType = energyType.name
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
        // const currentUser = await (await this.httpService.get('http://localhost:3000/users/user', { headers: requestHeader }).toPromise()).data

        const model = plainToClass(this.heroModel, heroCreationDto)
        model.createdBy = user.id

        const username = ""
        const race = ""
        const characterClass = ""
        const origin = ""
        const energyType = ""



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
        const batata = model.save()

        return `${(await batata).id} was created by NOME`
    }

}
