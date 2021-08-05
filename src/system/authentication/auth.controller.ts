import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { Public } from "../user/decorators/public.decorator";
import { User } from "../user/decorators/user.decorator";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-strategy.guard";


@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@User() user) { // TODO: Set return type
    return this.authService.login(user);
  }

  @Get('profile')
  async getProfile(@User() user) { // TODO: Move to userControoler?
    return user;
  }
}