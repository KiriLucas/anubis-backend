import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthGuard } from "../authentication/guards/auth.guard";
import { UserController } from "./user.controller";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";
import { IsEmailUniqueValidation } from "./validators/isEmailUnique.validator";
import { IsUsernameUniqueValidation } from "./validators/isUsernameUnique.validator";

@Module({
    imports: [    
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          autoLoadModels: true,
          synchronize: true,
        }),
        SequelizeModule.forFeature([UserModel]),
    ],
    controllers: [UserController],
    providers: [UserService, AuthGuard, IsEmailUniqueValidation, IsUsernameUniqueValidation],
    exports: [UserService]
})
export class UserModule {}