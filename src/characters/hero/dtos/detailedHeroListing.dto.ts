import { Exclude, Expose } from "class-transformer";

@Exclude()
export class DetailedHeroListingDto {

    @Expose()
    userId: number;

    @Expose()
    name: string;

    @Expose()
    gender: string;

    @Expose()
    age: number;

    @Expose()
    race: string;

    @Expose()
    characterClass: string;

    @Expose()
    origin: string;

    @Expose()
    energyType: string;

    @Expose()
    maxHp: number;

    @Expose()
    maxEnergy: number;

    @Expose()
    carryingCapacity: number;
}