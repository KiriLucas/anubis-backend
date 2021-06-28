import { UserModel } from "../user.model";

export type UserType = Omit<UserModel, 'hashPassword'>