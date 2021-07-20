import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ItemCategoryModel } from "./category.model";
import { ItemCategoryService } from "./category.service";
import { ItemController } from "./item.controller";
import { ItemModel } from "./item.model";
import { ItemService } from "./item.service";

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
    SequelizeModule.forFeature([ItemModel, ItemCategoryModel]),
  ],
  controllers: [ItemController],
  providers: [ItemService, ItemCategoryService]
})
export class ItemModule { }