import { Injectable } from '@nestjs/common';
import { UserDto } from '../user/dtos/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
  
    async validateUser(username: string, password: string): Promise<UserDto> {
      const user: UserDto = await this.userService.getUserByUsername(username);
      if (user && user.password === password) {
        return user;
      }
      return null;
    }
  }