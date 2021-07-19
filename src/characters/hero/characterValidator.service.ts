import { ClassDto } from "./dtos/characterClass.dto";
import { RaceDto } from "./dtos/race.dto";

export class CharacterValidator {

    async validateData(raceData: RaceDto, classData: ClassDto) {
        const errors = [];

        if (!raceData) {
            errors.push('\nCould not find race')
        }
        if (!classData) {
            errors.push('\nCould not find race')
        }

        if (errors.length > 0) {
            throw new Error(`${errors}`)
        }
    }
}