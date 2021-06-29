import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, NextFunction } from "express";
import { ExpressRequest } from "src/types/expressRequest.interface";
import { verify } from 'jsonwebtoken'
import { UserService } from "../../user/user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private readonly userService: UserService) {}

    async use(request: ExpressRequest, _: Response, next: NextFunction) {
        const authHeader = request.headers.authorization;
        request.user = null
        if (!authHeader) {
            next()
            return
        }

        try {
            request.user = await this.userService.getUserById(verify(authHeader.split(' ')[1], process.env.JWT_SECRET).id);
            next()
        } catch (error) { // TODO: Create error logging
            console.log('Auth Middlware Error: ', error)
            next()
        }
    }
}