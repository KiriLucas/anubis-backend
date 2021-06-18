import { Module } from '@nestjs/common';
import { HeroesController } from "../heroes/heroes.controller"
import { PowersController } from '../powers/powers.controller';
import { HeroPowersController } from '../powers/heroes.controller';

@Module({
  imports: [],
  controllers: [HeroesController, PowersController, HeroPowersController]
})
export class AppModule {}
