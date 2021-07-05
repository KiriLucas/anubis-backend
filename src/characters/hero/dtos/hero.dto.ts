import { Exclude, Expose } from "class-transformer";

@Exclude()
export class HeroDto {

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
    energyType: string;
}