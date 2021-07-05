import { Table, Model, Column, DataType, BeforeCreate, BeforeSave, BeforeBulkCreate } from "sequelize-typescript";

@Table({ tableName: 'races', underscored: true})
export class RaceModel extends Model {

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    description: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    strength_bonus: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    dexterity_bonus: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    agility_bonus: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    intelligence_bonus: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    vitality_bonus: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    charisma_bonus: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    wisdom_bonus: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    will_bonus: number;
}