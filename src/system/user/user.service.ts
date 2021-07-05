import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserCreationDto } from "./dtos/userCreation.dto";
import { UserModel } from "./user.model";
import { sign } from 'jsonwebtoken';
import { UserResponseDto } from "./dtos/userResponse.dto";
import { UserLoginDto } from "./dtos/userLogin.dto";
import { plainToClass } from "class-transformer";
import { compare } from "bcrypt"

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
        } else if (await this.isUsernameUsed(userCreationDto.username)) {
            throw new HttpException(`${userCreationDto.username} is already being used`, HttpStatus.UNPROCESSABLE_ENTITY)
        }

        const newUser = new UserModel();
        Object.assign(newUser, userCreationDto);

        return newUser.save();
    }

    async getUserByUsername(username: string): Promise<UserModel> {
        return this.userModel.findOne({ where: { username: username } })
    }

    async getUserById(id: number): Promise<UserResponseDto> {
        const model = await this.userModel.findOne({ where: { id: id } });
        return this.getUserResponse(model)
    }

    getToken(model: UserModel){
        return sign({id: model.id, user: model.username, email: model.email}, process.env.JWT_SECRET)
    }

    getUserResponse(model: UserModel): UserResponseDto {
        const userDto = plainToClass(UserResponseDto, model);
        userDto.token = this.getToken(model)

        return userDto;
    }

    async login(loginDto: UserLoginDto): Promise<UserModel> {
        const userModel = await this.getUserByUsername(loginDto.username)

        if (!userModel || !await compare(loginDto.password, userModel.password)) {
            throw new HttpException('Username or password is incorrect', HttpStatus.UNPROCESSABLE_ENTITY)
        }

        return userModel
    }

    async isEmailUsed(email: string): Promise<boolean> {
        return await this.userModel.findOne({ where: { email: email } }) !== null;
    }

    async isUsernameUsed(username: string): Promise<boolean> {
        return await this.userModel.findOne({ where: { username: username } }) !== null;
    }
}