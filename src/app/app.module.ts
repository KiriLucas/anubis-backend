import { Module } from '@nestjs/common';
import { HeroesController } from "../heroes/heroes.controller"
import { PowersController } from '../powers/powers.controller';
import { HeroPowersController } from '../powers/heroes.controller';
import { HeroesService } from 'src/heroes/heroes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { HeroesModel } from 'src/heroes/heroes.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'rpg_tool',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([HeroesModel]),
  ],
  controllers: [HeroesController, PowersController, HeroPowersController],
  providers: [HeroesService]
})
export class AppModule {}
