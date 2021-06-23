import { Module } from '@nestjs/common';
import { HeroModule } from 'src/characters/hero/hero.module';
import { SkillModule } from 'src/skills/skill.module';
import { NpcModule } from 'src/characters/npc/npc.module';

@Module({
  imports: [HeroModule, SkillModule, NpcModule],
  controllers: [],
  providers: []
})
export class AppModule { }
