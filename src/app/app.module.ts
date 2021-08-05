import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthModule } from 'src/system/authentication/auth.module';
import { HeroModule } from 'src/characters/hero/hero.module';
import { SkillModule } from 'src/skills/skill.module';
import { NpcModule } from 'src/characters/npc/npc.module';
import { UserModule } from 'src/system/user/user.module';
import { RaceModule } from 'src/races/race.module';
import { ClassModule } from 'src/classes/rclass.module';
import { AttributesModule } from 'src/attributes/attributes.module';
import { InventoryModule } from 'src/inventory/inventory.module';
import { ItemModule } from 'src/items/item.module';
import { APP_GUARD } from '@nestjs/core/constants';
import { JwtAuthGuard } from 'src/system/authentication/guards/jwt-auth.guard';

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
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },]
})
export class AppModule { }
