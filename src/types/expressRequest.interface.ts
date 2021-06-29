import { Request } from 'express'
import { UserModel } from 'src/system/user/user.model';

export interface ExpressRequest extends Request {
    user?: UserModel
}