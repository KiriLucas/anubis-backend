import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from './dtos/user.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<UserDTO> {
        const user: UserDTO = await this.userService.getUserByUsername(username); // TODO: Refactor UserDTO so it won't return the user's password
        const isPasswordCorrect = await compare(password, user.password)

        return user && isPasswordCorrect ? user : null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload), // TODO: Create DTO for the return
        };
    }
}