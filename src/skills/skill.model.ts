import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({tableName: 'skills', underscored: true})
export class SkillModel extends Model<SkillModel> {

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    type: string;

    @Column({ type: DataType.STRING, allowNull: true })
    nature: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    description: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    energyCost: number;

    @Column({ type: DataType.STRING, allowNull: false })
    createdBy?: string;

    @Column({ type: DataType.DATE, allowNull: false })
    createdAt?: Date;

    @Column({ type: DataType.STRING, allowNull: true })
    updatedBy?: string;

    @Column({ type: DataType.DATE, allowNull: true })
    updatedAt?: Date;
}