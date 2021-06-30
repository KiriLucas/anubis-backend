import { Exclude, Expose } from "class-transformer";

@Exclude()
export class HeroDto {
    
    @Expose()
    userId: number;
    
    @Expose()
    name: string;
    
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
    maxEnergy: number;
    
    @Expose()
    carryingCapacity: number;
    
    @Expose()
    createdBy: number;
    
    @Expose()
    createdAt: Date;
    
    @Expose()
    updatedBy?: number;
    
    @Expose()
    updatedAt?: Date;
}