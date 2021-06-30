import { Request } from 'express'
import { UserResponseDto } from 'src/system/user/dtos/userResponse.dto';
import { UserModel } from 'src/system/user/user.model';

export interface ExpressRequest extends Request {
    user?: UserResponseDto
}