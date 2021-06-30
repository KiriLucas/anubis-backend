import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthGuard } from "src/system/authentication/guards/auth.guard";
import { RaceController } from "./race.controller";
import { RaceModel } from "./race.model";
import { RaceService } from "./race.service";

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
        SequelizeModule.forFeature([RaceModel]),
    ],
    controllers: [RaceController],
    providers: [RaceService, AuthGuard],
    exports: [RaceService]
})
export class RaceModule {}