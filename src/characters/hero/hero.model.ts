import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({tableName: 'heroes', underscored: true})
export class HeroModel extends Model<HeroModel> {

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    race: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    age: number;

    @Column({ type: DataType.STRING, allowNull: false })
    gender: string;

    @Column({ type: DataType.STRING, allowNull: false })
    job: string;

    @Column({ type: DataType.STRING, allowNull: false })
    origin: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    maxHp: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    maxEnergy: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    carryingCapacity: number;

    @Column({ type: DataType.STRING, allowNull: false })
    createdBy?: string;

    @Column({ type: DataType.DATE, allowNull: false })
    createdAt?: Date;

    @Column({ type: DataType.STRING, allowNull: true })
    updatedBy?: string;

    @Column({ type: DataType.DATE, allowNull: true })
    updatedAt?: Date;
}