import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";

@Exclude()
export class ClassListingDto {
    @Expose()
    id?: number;
    
    @Expose()
    name: string;
    
    @Expose()
    description: string;
    
    @Expose()
    strength_bonus: number;
    
    @Expose()
    dexterity_bonus: number;
    
    @Expose()
    agility_bonus: number;
    
    @Expose()
    intelligence_bonus: number;
    
    @Expose()
    vitality_bonus: number;
    
    @Expose()
    charisma_bonus: number;
    
    @Expose()
    wisdom_bonus: number;
    
    @Expose()
    will_bonus: number;
}