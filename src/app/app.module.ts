import { NpcService } from '../characters/npc/npc.service';
import { NpcController } from '../characters/npc/npc.controller';
import { Module } from '@nestjs/common';
import { SkillsController } from '../skills/skills.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SkillsModel } from 'src/skills/skills.model';
import { SkillsService } from 'src/skills/skills.service';
import { NpcModel } from 'src/characters/npc/npc.model';
import { HeroPowersController } from 'src/skills/heroes.controller';
import { HeroModule } from 'src/characters/hero/hero.module';

@Module({
  imports: [HeroModule,
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
    SequelizeModule.forFeature([SkillsModel, NpcModel]),
  ],
  controllers: [
    NpcController,
    SkillsController,
    HeroPowersController],

  providers: [
    NpcService,
    SkillsService]
})
export class AppModule { }
