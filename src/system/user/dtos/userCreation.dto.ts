import { IsEmail, IsNotEmpty } from "class-validator";

export class UserCreationDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}