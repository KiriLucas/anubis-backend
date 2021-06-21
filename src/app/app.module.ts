import { Module } from '@nestjs/common';
import { HeroesController } from "../heroes/heroes.controller"
import { SkillsController } from '../skills/skills.controller';
import { HeroPowersController } from '../skills/heroes.controller';
import { HeroesService } from 'src/heroes/heroes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { HeroesModel } from 'src/heroes/heroes.model';
import { ConfigModule } from '@nestjs/config';
import { SkillsModel } from 'src/skills/skills.model';
import { SkillsService } from 'src/skills/skills.service';

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
    SequelizeModule.forFeature([HeroesModel, SkillsModel]),
  ],
  controllers: [HeroesController, SkillsController, HeroPowersController],
  providers: [HeroesService, SkillsService]
})
export class AppModule {}
