import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { plainToClass } from "class-transformer";
import { Constants } from "src/utils/constants";
import { AttributesModel } from "./attributes.model";
import { AttributesCreationDto } from "./dtos/attributes.dto";
import { AttributesDto } from "./dtos/attributesFormula.dto";
import { NewAttributesDto } from "./dtos/newAttributes.dto";

@Injectable()
export class AttributesService {

    constructor(@InjectModel(AttributesModel) private attributesModel: typeof AttributesModel) { }

    // TODO: Change return type
    async createCharacterAttributes(attributesCreationDto: AttributesCreationDto): Promise<any> {
        const attributes: AttributesDto = await this.setAttributesOnCreation(attributesCreationDto)

        const model = plainToClass(AttributesModel, attributes)
        return model.save()
    }

    async getAttributesByCharacterId(id: number): Promise<AttributesDto> {
        return this.attributesModel.findOne({ where: { id: id } })
    }

    // TODO: Remove those ugly "ifs" and refactor this method into a decent looking one
    async setEnergyAmount(attributesCreationDto: AttributesCreationDto): Promise<number> {
        const energyType = attributesCreationDto.character.energyType

        if (energyType === Constants.MAGIC) {
            return
        } else if (energyType === Constants.PHYSICAL) {
            return
        }
    }

    // TODO: All formulas shoud, eventually, be on separate methods
    async setAttributesOnCreation(attributesCreationDto: AttributesCreationDto): Promise<AttributesDto> {
        const characterAttributes = attributesCreationDto.characterAttributes
        const character = attributesCreationDto.character
        await this.setEnergyAmount(attributesCreationDto)
        const attributes: AttributesDto = {
            ...characterAttributes,

            characterId: character.heroId,
            // Dynamic attributes
            maxHp: Constants.BASE_HP + (characterAttributes.vitality * 10),
            currentHp: Constants.BASE_HP + (characterAttributes.vitality * 10),
            // maxEnergy: Constants.BASE_ENERGY,
            // currentEnergy: 1,
            energyType: character.energyType,
            carryingCapacity: Constants.BASE_WEIGHT + (characterAttributes.strength * 30), // For each str point, add 30 to max_weight
            // Passive attributes
            physicalDamage: Math.floor((character.level / 4) + characterAttributes.strength + (characterAttributes.dexterity)),
            physicalDefense: Math.floor((characterAttributes.vitality / 2) + (characterAttributes.agility / 5) + (character.level / 2)),
            magicDamage: Math.floor(Math.floor(character.level / 4) + characterAttributes.intelligence + Math.floor(characterAttributes.intelligence / 2) + Math.floor(characterAttributes.dexterity / 5)),
            magicDefense: Math.floor((characterAttributes.intelligence + (characterAttributes.vitality / 5) + (characterAttributes.dexterity / 5) + (character.level / 4))),
            hitChance: 1,
            fleeChance: 1,
            critical: 1,
            attackSpeed: 1,
        }

        return attributes
    }
}