import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({tableName: 'npcs'})
export class NpcModel extends Model<NpcModel> {

    @Column({ type: DataType.STRING, allowNull: false, field: 'name' })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'race' })
    race: string;

    @Column({ type: DataType.INTEGER, allowNull: true, field: 'age' })
    age: number;

    @Column({ type: DataType.STRING, allowNull: false, field: 'gender' })
    gender: string;

    @Column({ type: DataType.STRING, allowNull: true, field: 'occupation'})
    occupation: string;

    @Column({ type: DataType.STRING, allowNull: false, field: 'location' })
    location: string;

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