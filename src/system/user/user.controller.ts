import { Body, Controller, Post } from "@nestjs/common";
import { UserCreationDto } from "./dtos/userCreation.dto";
import { UserResponseInterface } from "./interfaces/userResponse.interface";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body('user') createUserDto: UserCreationDto): Promise<UserResponseInterface> {
        const user = await this.userService.createUser(createUserDto);
        return this.userService.buildUserResponse(user);
    }
}