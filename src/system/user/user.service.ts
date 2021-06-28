import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserCreationDto } from "./dtos/userCreation.dto";
import { UserModel } from "./user.model";
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from "config";
import { UserResponseInterface } from "./interfaces/userResponse.interface";
import { UserResponseDto } from "./dtos/userResponse.dto";
import { UserLoginDto } from "./dtos/userLogin.dto";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {

    constructor(@InjectModel(UserModel)
    private userModel: typeof UserModel) {
    }

    // TODO: Review this whole method... Maybe create a validation class or an utils module? Improve code quality and reduce complexity if possible
    async createUser(userCreationDto: UserCreationDto): Promise<UserModel> {

        // TODO: Create array of errors/error messages, just so every error will be displayed at once
        if (await this.isEmailUsed(userCreationDto.email)) {
            throw new HttpException(`${userCreationDto.email} is already being used`, HttpStatus.UNPROCESSABLE_ENTITY)
        } else if(await this.isUsernameUsed(userCreationDto.username)){
            throw new HttpException(`${userCreationDto.username} is already being used`, HttpStatus.UNPROCESSABLE_ENTITY)
        }

        const newUser = new UserModel();
        Object.assign(newUser, userCreationDto);

        return newUser.save();
    }

    async isEmailUsed(email: string): Promise<boolean> {
        return await this.userModel.findOne({ where: { email: email } }) !== null;
    }

    async isUsernameUsed(username: string): Promise<boolean> {
        return await this.userModel.findOne({ where: { username: username } }) !== null;
    }

    // TODO: Refactor this, which is probably not necessary
    generateJwt(user: UserModel): string {
        return sign({
            id: user.id,
            user: user.username,
            email: user.email
        }, JWT_SECRET)
    }

    // TODO: Refactor the return type (it should not be 'any', should be a DTO) and maybe use the responseInterface
    getUserResponse(user: UserModel): UserResponseDto {
        const dto = plainToClass(UserResponseDto, user);
        return dto;
    }

    async login(loginDto: UserLoginDto){
        
    }

    // // TODO: Find why this piece of shit is not working
    // buildUserResponse2(user: UserModel): UserResponseInterface {
    //     return{
    //         user: {
    //             ...user,
    //             token: this.generateJwt(user)
    //          }
    //     }
    // }
}