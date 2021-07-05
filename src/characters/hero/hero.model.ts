import { Table, Model, Column, DataType, Sequelize, PrimaryKey } from "sequelize-typescript";

@Table({ tableName: 'heroes', underscored: true })
export class HeroModel extends Model<HeroModel> {

    @PrimaryKey
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true})
    heroId: number;

    @Column({ type: DataType.STRING, allowNull: false })
    userId: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    level: number;

    @Column({ type: DataType.STRING, allowNull: false })
    gender: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    age: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    raceId: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    classId: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    originId: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    createdBy: number;

    @Column({ type: DataType.DATE, allowNull: false })
    createdAt: Date;
}