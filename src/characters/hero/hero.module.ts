import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { RequestUtils } from 'src/utils/requests.utils';
import { CharacterValidator } from './characterValidator.service';
import { HeroController } from './hero.controller';
import { HeroModel } from './hero.model';
import { HeroService } from './hero.service';
import { IntegrationService } from './integration.service';


@Module({
    imports: [
      HttpModule,    
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
        SequelizeModule.forFeature([HeroModel]),
    ],
    controllers: [HeroController],
    providers: [HeroService, RequestUtils, IntegrationService, CharacterValidator],
})
export class HeroModule { }