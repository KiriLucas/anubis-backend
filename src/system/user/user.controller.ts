import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserCreationDto } from "./dtos/userCreation.dto";
import { UserLoginDto } from "./dtos/userLogin.dto";
import { UserResponseDto } from "./dtos/userResponse.dto";
import { UserService } from "./user.service";
import { User } from "./decorators/user.decorator";
import { UserModel } from "./user.model";
import { Public } from "./decorators/public.decorator";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Public()
    @Post()
    async createUser(@Body('user') userCreationDto: UserCreationDto): Promise<UserResponseDto> {
        return this.userService.getUserResponse(await this.userService.createUser(userCreationDto));
    }

    @Get('user')
    async currentUser(@User() user: UserModel): Promise<UserResponseDto> {
        return this.userService.getUserResponse(user)
    }

    @Get('/:id')
    async getClassById(@Param('id') id: number): Promise<any> {
        return this.userService.getUserById(id)

    }
}