import { Injectable } from '@nestjs/common';
import { HeroesDto } from './dto/heroes.dto';

@Injectable()
export class HeroesService {
    
    // Used for testing purposes, should be deleted after
    // the database starts being used 
    heroes: HeroesDto[] = [
        new HeroesDto("Thor Odinson", "Aesir", "Unknown", "Male", "Warrior", "Gods"),
        new HeroesDto("Odin Borson", "Aesir", "Unknown", "Male", "Warrior", "Gods"),
        new HeroesDto("Loki Farbauti", "Jotun", "Unknown", "Male", "Warrior", "Gods")
    ]

    getHeroesList(): HeroesDto[]{
        return this.heroes;
    }

    getHeroById(id: number): HeroesDto{
        return this.heroes[id];
    }

    newHero(body: HeroesDto){
        this.heroes.push(body)
    }

}
