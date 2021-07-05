export class AttributesCreationDto {
    characterAttributes: {
        maxHp: number;
        currentHp: number;
        maxEnergy: number;
        currentEnergy: number;
        carryingCapacity: number;
        strength: number;
        dexterity: number;
        agility: number;
        intelligence: number;
        vitality: number;
        charisma: number;
        wisdom: number;
        will: number;
        physicalDamage: number;
        physicalDefense: number;
        magicDamage: number;
        magicDefense: number;
        hitChance: number;
        fleeChance: number;
        critical: number;
        attackSpeed: number;
    }
    character: {
        heroId: number;
        level: number;
        energyType: string;
    }
}