import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { HeroModule } from 'src/characters/hero/hero.module';
import { SkillModule } from 'src/skills/skill.module';
import { NpcModule } from 'src/characters/npc/npc.module';
import { UserModule } from 'src/system/user/user.module';
import { AuthMiddleware } from 'src/system/authentication/middlewares/auth.middleware';

@Module({
  imports: [HeroModule, SkillModule, NpcModule, UserModule],
  controllers: [],
  providers: []
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
  }
}
