import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dtos/createuser.dto";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {

    constructor(@InjectModel(UserModel)
    private userModel: typeof UserModel) {
    }

    async createUser(createUserDto: CreateUserDto) {
        const model = new UserModel();
        Object.assign(model, createUserDto)

        return model.save();
    }
}