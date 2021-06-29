import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator((data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()

    if (!request.user) {
        null;
    }

    if (data) {
        return request.user[data]
    }

    return request.user
})