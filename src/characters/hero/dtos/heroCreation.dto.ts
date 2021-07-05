export class HeroCreationDto {
    userId: number;
    name: string;
    gender: string;
    age: number;
    raceId: number;
    classId: number;
    originId: number;
    energyType: number;
    createdBy: number;
    createdAt: Date;
    updatedBy?: number;
    updatedAt?: Date;
}