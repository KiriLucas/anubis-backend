export class HeroCreationDto {
    userId: number;
    name: string;
    gender: string;
    age: number;
    raceId: number;
    classId: number;
    originId: number;
    energyType: number;
    maxHp: number;
    maxEnergy: number;
    carryingCapacity: number;
    createdBy: number;
    createdAt: Date;
    updatedBy?: number;
    updatedAt?: Date;
}