import { Module } from '@nestjs/common';
import { HeroesController } from "../heroes/heroes.controller"
import { PowersController } from '../powers/powers.controller';
import { HeroPowersController } from '../powers/heroes.controller';
import { HeroesService } from 'src/heroes/heroes.service';

@Module({
  imports: [],
  controllers: [HeroesController, PowersController, HeroPowersController],
  providers: [HeroesService]
})
export class AppModule {}
