import { Exclude, Expose } from "class-transformer";

@Exclude()
export class AttributesSavingDto {
    
    @Expose()
    heroId: number;
    
    @Expose()
    userId: number;
    
    @Expose()
    name: string;
    
    @Expose()
    level: number;
    
    @Expose()
    gender: string;
    
    @Expose()
    age: number;
    
    @Expose()
    raceId: number;
    
    @Expose()
    classId: number;
    
    @Expose()
    originId: number;
    
    @Expose()
    energyType: number;
    
    @Expose()
    maxHp: number;
    
    @Expose()
    currentHp: number;
    
    @Expose()
    maxEnergy: number;
    
    @Expose()
    currentEnergy: number;
    
    @Expose()
    carryingCapacity: number;
    
    @Expose()
    strength: number;
    
    @Expose()
    dexterity: number;
    
    @Expose()
    agility: number;
    
    @Expose()
    intelligence: number;
    
    @Expose()
    vitality: number;
    
    @Expose()
    charisma: number;
    
    @Expose()
    wisdom: number;
    
    @Expose()
    will: number;
    
    @Expose()
    physicalDamage: number;
    
    @Expose()
    physicalDefense: number;
    
    @Expose()
    magicDamage: number;
    
    @Expose()
    magicDefense: number;
    
    @Expose()
    hitChance: number;
    
    @Expose()
    fleeChance: number;
    
    @Expose()
    critical: number;
    
    @Expose()
    attackSpeed: number;
}