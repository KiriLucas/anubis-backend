import { HttpException, HttpService, Injectable } from '@nestjs/common';
import { RequestUtils } from 'src/utils/requests.utils';
import { UserResponseDto } from 'src/system/user/dtos/userResponse.dto';
import { Constants } from 'src/utils/constants';
import { RaceDto } from './dtos/race.dto';
import { ClassDto } from './dtos/characterClass.dto';
import { NewAttributesDto } from './dtos/newAttributes.dto';
import { HeroDto } from './dtos/hero.dto';


@Injectable()
export class IntegrationService {

    constructor(private httpService: HttpService,
        private requestUtils: RequestUtils) { }

        async getRaceById(raceId: number, user: UserResponseDto): Promise<RaceDto> {
            const header = await this.requestUtils.getHeader(user)
            const url = `${process.env.URL}${Constants.GET_RACE}${raceId}`
            const response = await this.httpService.get(url, header).toPromise().catch(e => {
                throw new HttpException(e.response.data, e.response.status);
              })

            return response.data
        }

        async getClassById(classId: number, user: UserResponseDto): Promise<ClassDto> {
            const header = await this.requestUtils.getHeader(user)
            const url = `${process.env.URL}${Constants.GET_CLASS}${classId}`
            const response = await this.httpService.get(url, header).toPromise().catch(e => {
                throw new HttpException(e.response.data, e.response.status);
              })

            return response.data
        }

        async getCharacterAttributes(characterId: number, user: UserResponseDto): Promise<any> { // TODO: Change return, create DTO
            const header = await this.requestUtils.getHeader(user)
            const url = `${process.env.URL}${Constants.GET_ATTRIBUTES}${characterId}`
            const response = await this.httpService.get(url, header).toPromise()

            return response.data
        }

        async createAttributes(characterAttributes: NewAttributesDto, character: HeroDto, user: UserResponseDto): Promise<ClassDto> {
            const header = await this.requestUtils.getHeader(user)
            const url = `${process.env.URL}${Constants.CREATE_ATTRIBUTES}`
  
            const response = await this.httpService.post(url, {characterAttributes, character}, header).toPromise()

            return response.data
        }

}
