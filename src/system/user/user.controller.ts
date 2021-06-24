import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createuser.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
        return this.userService.createUser(createUserDto);
    }
}