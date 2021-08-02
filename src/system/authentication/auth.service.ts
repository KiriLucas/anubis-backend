import { Injectable } from '@nestjs/common';
import { UserDto } from '../user/dtos/user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<UserDto> {
        const user: UserDto = await this.userService.getUserByUsername(username); // TODO: Refactor UserDTO so it won't return the user's password
        // TODO: Use bcrypt to check password
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}