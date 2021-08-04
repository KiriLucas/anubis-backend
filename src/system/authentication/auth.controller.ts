import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-strategy.guard";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() request) {
      return this.authService.login(request.user);
    }
}