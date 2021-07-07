import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthGuard } from "src/system/authentication/guards/auth.guard";
import { InventoryController } from "./inventory.controller";
import { InventoryModel } from "./inventory.model";
import { InventoryService } from "./inventory.service";

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
    SequelizeModule.forFeature([InventoryModel]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService, AuthGuard],
  exports: [InventoryService]
})
export class InventoryModule { }