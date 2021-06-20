import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({tableName: 'heroes'})
export class HeroesModel extends Model<HeroesModel> {

    @Column({ type: DataType.STRING, allowNull: false, field: 'name' })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'race' })
    race: string;

    @Column({ type: DataType.INTEGER, allowNull: true, field: 'age' })
    age: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'gender' })
    gender: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'job'})
    job: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'origin' })
    origin: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'created_by' })
    createdBy: string;

    @Column({ type: DataType.DATE, allowNull: false, field: 'created_at' })
    createdAt: Date;

    @Column({ type: DataType.STRING, allowNull: false, field: 'updated_by' })
    updatedBy: string;

    @Column({ type: DataType.DATE, allowNull: false, field: 'updated_at'  })
    updatedAt: Date;
}