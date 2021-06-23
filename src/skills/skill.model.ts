import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({tableName: 'skills'})
export class SkillModel extends Model<SkillModel> {

    @Column({ type: DataType.STRING, allowNull: false, field: 'name' })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'type' })
    type: string;

    @Column({ type: DataType.STRING, allowNull: true, field: 'nature' })
    nature: string;

    @Column({ type: DataType.TEXT, allowNull: false, field: 'description' })
    description: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'created_by' })
    createdBy?: string;

    @Column({ type: DataType.DATE, allowNull: false, field: 'created_at' })
    createdAt?: Date;

    @Column({ type: DataType.STRING, allowNull: true, field: 'updated_by' })
    updatedBy?: string;

    @Column({ type: DataType.DATE, allowNull: true, field: 'updated_at'  })
    updatedAt?: Date;
}