import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, NextFunction } from "express";
import { ExpressRequest } from "src/types/expressRequest.interface";
import { verify } from 'jsonwebtoken'
import { UserService } from "../../user/user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private readonly userService: UserService) {

    }

    async use(req: ExpressRequest, _: Response, next: NextFunction) {

        if (!req.headers.authorization) {
            req.user = null
            next()
            return
        }

        const token = req.headers.authorization.split(' ')[1]

        try {
            const user = await this.userService.getUserById(verify(token, process.env.JWT_SECRET).id)
            req.user = user;
            next()

        } catch (error) {
            req.user = null
            next()
        }
    }
}