import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserCreationDto } from "./dtos/userCreation.dto";
import { UserLoginDto } from "./dtos/userLogin.dto";
import { UserResponseDto } from "./dtos/userResponse.dto";
import { UserService } from "./user.service";
// import { UserResponseInterface } from "./interfaces/userResponse.interface";
// import { UserModel } from "./user.model";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body('user') userCreationDto: UserCreationDto): Promise<UserResponseDto> {
        return this.userService.getUserResponse(await this.userService.createUser(userCreationDto));
    }

    @Post('/login')
    @UsePipes(new ValidationPipe())
    async userLogin(@Body() loginDto: UserLoginDto): Promise<UserResponseDto> {
        const user = await this.userService.login(loginDto)
        return "teste" as any
    }
}