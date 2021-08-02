import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./guards/local-strategy.guard";

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() request) {
      return request.user;
    }
}