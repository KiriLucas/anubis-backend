import { UserType } from "../types/user.type";
import { UserModel } from "../user.model";

export interface UserResponseInterface {
    user: UserModel & { token: string }        
}