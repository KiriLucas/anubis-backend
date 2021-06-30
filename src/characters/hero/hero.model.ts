import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({tableName: 'heroes', underscored: true})
export class HeroModel extends Model<HeroModel> {

    @Column({ type: DataType.STRING, allowNull: false})
    userId: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

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
    energyType: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    maxHp: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    maxEnergy: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    carryingCapacity: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    createdBy: number;

    @Column({ type: DataType.DATE, allowNull: false })
    createdAt: Date;

    @Column({ type: DataType.INTEGER, allowNull: true })
    updatedBy?: number;

    @Column({ type: DataType.DATE, allowNull: true })
    updatedAt?: Date;
}