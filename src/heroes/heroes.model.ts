export class HeroesModel {
    id: number;
    name: string;
    race: string;
    age: string;
    gender: string;
    job: string;
    origin: string;
    createdBy: string;
    createdAt: string;
    updateBy: string;
    lastUpdate: string;

    constructor(name: string, race: string, age: string, gender: string, job: string, origin: string,
             createdBy: string, createdAt: string, updateBy: string, lastUpdate: string) {
        this.name = name;
        this.race = race;
        this.age = age;
        this.gender = gender;
        this.job = job;
        this.origin = origin;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.updateBy = updateBy;
        this.lastUpdate = lastUpdate;
    }

}