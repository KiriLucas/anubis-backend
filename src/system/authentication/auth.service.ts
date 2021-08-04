import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from './dtos/user.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<UserDTO> {
        const user: UserDTO = await this.userService.getUserByUsername(username); // TODO: Refactor UserDTO so it won't return the user's password

        // TODO: Use bcrypt (change bcrypt to something else) to check password
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}