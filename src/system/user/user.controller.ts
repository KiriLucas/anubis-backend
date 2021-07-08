import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserCreationDto } from "./dtos/userCreation.dto";
import { UserLoginDto } from "./dtos/userLogin.dto";
import { UserResponseDto } from "./dtos/userResponse.dto";
import { UserService } from "./user.service";
import { User } from "./decorators/user.decorator";
import { UserModel } from "./user.model";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body('user') userCreationDto: UserCreationDto): Promise<UserResponseDto> {
        return this.userService.getUserResponse(await this.userService.createUser(userCreationDto));
    }

    @Post('/login')
    async userLogin(@Body() loginDto: UserLoginDto): Promise<UserResponseDto> {
        const user = await this.userService.login(loginDto)

        return await this.userService.getUserResponse(user)
    }

    // Middlware testing
    @Get('user')
    async currentUser(@User() user: UserModel): Promise<UserResponseDto> {
        return this.userService.getUserResponse(user)
    }
}