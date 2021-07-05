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

    async createCharacterAttributes(attributesCreationDto: AttributesCreationDto): Promise<any> {
        const attributes = attributesCreationDto.characterAttributes
        const character = attributesCreationDto.character
        attributes.attackSpeed = 0
        await this.setAttributesOnCreation(attributesCreationDto)
        // const model = plainToClass(AttributesModel, attributesDto)
        // return model.save()
    }

    async getAttributesByCharacterId(id: number): Promise<AttributesDto> {
        return this.attributesModel.findOne({ where: { id: id } })
    }

    // TODO: All formulas shoud, eventually, be on separate methods
    async setAttributesOnCreation(attributesCreationDto: AttributesCreationDto): Promise<AttributesDto> {
        const characterAttributes = attributesCreationDto.characterAttributes
        const character = attributesCreationDto.character
        
        const attributes: AttributesDto = { ...characterAttributes,

            // Dynamic attributes

            maxHp: Constants.BASE_HP + (characterAttributes.vitality * 10),
            currentHp: Constants.BASE_HP + (characterAttributes.vitality * 10),

            //! This should be set on a different method accordingly to energy type, as it's formula should be different for each class
            // maxEnergy: Constants.BASE_ENERGY,
            // currentEnergy: 1,
            energyType: character.energyType,
            carryingCapacity: Constants.BASE_WEIGHT + (characterAttributes.strength * 30), // For each str point, add 10 to max_weight

            // Passive attributes
            physicalDamage: Math.floor((character.level / 4) + characterAttributes.strength + (characterAttributes.dexterity)),
            physicalDefense: 1,
            magicDamage: 1,
            magicDefense: 1,
            hitChance: 1,
            fleeChance: 1,
            critical: 1,
            attackSpeed: 1,
        }

        console.log('ATRIBUTOS: ', attributes)


        return "" as any
    }
}