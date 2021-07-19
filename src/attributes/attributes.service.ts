import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { plainToClass } from "class-transformer";
import { Constants } from "src/utils/constants";
import { AttributesModel } from "./attributes.model";
import { AttributesCreationDTO } from "./dtos/attributesCreation.dto";
import { AttributesDTO } from "./dtos/attributes.dto";

@Injectable()
export class AttributesService {

    constructor(@InjectModel(AttributesModel) private attributesModel: typeof AttributesModel) { }

    async getCharacterAttributes(characterId: number){
        const teste = await this.attributesModel.findOne({ where: {characterId: characterId} })
        return await this.attributesModel.findOne({ where: {characterId: characterId} })
    }

    async createCharacterAttributes(attributesCreationDto: AttributesCreationDTO): Promise<any> { // TODO: Change return type
        const model = plainToClass(AttributesModel, await this.setAttributesOnCreation(attributesCreationDto))
        return model.save()
    }

    async getAttributesByCharacterId(id: number): Promise<AttributesDTO> {
        return this.attributesModel.findOne({ where: { id: id } })
    }

    // TODO: Remove those ugly "ifs" and refactor this method into a decent looking one
    // TODO: Add formulas to calculate max energy
    async setMaxEnergy(attributesCreationDto: AttributesCreationDTO): Promise<number> {
        const energyType = attributesCreationDto.character.energyType

        if (energyType === Constants.MAGIC) {
            return Constants.BASE_ENERGY
        } else if (energyType === Constants.PHYSICAL) {
            return Constants.BASE_ENERGY
        }
    }

    // TODO: All formulas shoud, eventually, be on separate methods
    async setAttributesOnCreation(attributesCreationDto: AttributesCreationDTO): Promise<AttributesDTO> {
        const characterAttributes = attributesCreationDto.characterAttributes
        const character = attributesCreationDto.character
        const maxEnergy = await this.setMaxEnergy(attributesCreationDto)
        const attributes: AttributesDTO = {
            ...characterAttributes,

            characterId: character.heroId,
            maxHp: Constants.BASE_HP + (characterAttributes.vitality * 10),
            currentHp: Constants.BASE_HP + (characterAttributes.vitality * 10),
            maxEnergy: maxEnergy,
            currentEnergy: maxEnergy,
            energyType: character.energyType,
            carryingCapacity: Constants.BASE_WEIGHT + (characterAttributes.strength * 30), // For each str point, add 30 to max_weight
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