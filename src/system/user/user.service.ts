import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserCreationDto } from "./dtos/userCreation.dto";
import { UserModel } from "./user.model";
import {sign} from 'jsonwebtoken';
import { JWT_SECRET } from "config";
import { UserResponseInterface } from "./interfaces/userResponse.interface";
import { UserResponseDto } from "./dtos/userResponse.dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(UserModel)
    private userModel: typeof UserModel) {
    }

    async createUser(createUserDto: UserCreationDto): Promise<UserModel> {
        const newUser = new UserModel();
        Object.assign(newUser, createUserDto)
        console.log(newUser)
        return newUser.save() // newUser.save();
    }

    generateJwt(user: UserModel): string {
        return sign({
            id: user.id,
            user: user.username,
            email: user.email
        }, JWT_SECRET)
    }

    buildUserResponse(user: UserModel): any {
        const dto = new UserResponseDto();
        dto.username = user.username
        dto.email = user.email
        dto.token = this.generateJwt(user)

        return dto;
    }

    // buildUserResponse(user: UserModel): UserResponseInterface {
    //     return{
    //         user: {
    //             ...user,
    //             token: this.generateJwt(user)
    //          }
    //     }
    // }
}