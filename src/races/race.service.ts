import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { plainToClass } from "class-transformer";
import { RaceCreationDto } from "./dtos/raceCreation.dto";
import { RaceListingDto } from "./dtos/raceListing.dto";
import { RaceModel } from "./race.model";

@Injectable()
export class RaceService {

    constructor(@InjectModel(RaceModel) private raceModel: typeof RaceModel) {}

    async createRace(raceCreationDto: RaceCreationDto): Promise<any> {
        const model = plainToClass(RaceModel, raceCreationDto)
        return model.save()
    }

    async getRaceById(id: number): Promise<RaceListingDto> {
        const race = await this.raceModel.findOne({ where: { id: id } })

        return race
    }

    async getRaceList(): Promise<RaceListingDto[]> {
        const dto = plainToClass(RaceListingDto, await this.raceModel.findAll())
        return dto
    }
}