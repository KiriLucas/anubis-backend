import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from './dtos/user.dto';
import { compare } from 'bcrypt';
import { JwtPayloadDTO } from './dtos/jwtPayload.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<UserDTO> {
        const user: UserDTO = await this.userService.getUserByUsername(username); // TODO: Refactor UserDTO so it won't return the user's password anymore
        const isPasswordCorrect = await compare(password, user.password)

        return user && isPasswordCorrect ? user : null;
    }

    login(user: UserDTO) { // TODO: Change return type
        const jwtPayload: JwtPayloadDTO = { username: user.username, sub: user.id };

        return { token: this.jwtService.sign(jwtPayload) };
    }
}