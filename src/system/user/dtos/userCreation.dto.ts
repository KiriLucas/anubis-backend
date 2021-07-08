import { IsEmail, IsNotEmpty } from "class-validator";
import { IsEmailUnique } from "../validators/isEmailUnique.validator";
import { IsUsernameUnique } from "../validators/isUsernameUnique.validator";

export class UserCreationDto {
    
    @IsUsernameUnique()
    @IsNotEmpty()
    username: string;

    @IsEmailUnique()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}