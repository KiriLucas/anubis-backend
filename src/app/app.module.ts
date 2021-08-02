import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthModule } from 'src/system/authentication/auth.module';
import { HeroModule } from 'src/characters/hero/hero.module';
import { SkillModule } from 'src/skills/skill.module';
import { NpcModule } from 'src/characters/npc/npc.module';
import { UserModule } from 'src/system/user/user.module';
import { AuthMiddleware } from 'src/system/authentication/middlewares/auth.middleware';
import { RaceModule } from 'src/races/race.module';
import { ClassModule } from 'src/classes/rclass.module';
import { AttributesModule } from 'src/attributes/attributes.module';
import { InventoryModule } from 'src/inventory/inventory.module';
import { ItemModule } from 'src/items/item.module';

@Module({
  imports: [
    HeroModule,
    SkillModule,
    NpcModule,
    UserModule,
    RaceModule,
    ClassModule,
    AttributesModule,
    InventoryModule,
    ItemModule,
    AuthModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes({
  //     path: '*',
  //     method: RequestMethod.ALL,
  //   })
  // }
}
