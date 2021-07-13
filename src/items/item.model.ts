import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'items', underscored: true, timestamps: false})
export class ItemModel extends Model {
    
    @Column({type: DataType.STRING, allowNull: false })
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    category: number;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isEquippable: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isEdible: boolean;

    @Column({type: DataType.INTEGER, allowNull: false})
    damageType: number;

    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    physicalDamage: number;

    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    physicalDefense: number;

    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    magicDamage: number;

    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    magicDefense: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    effectA: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    effectB: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    effectC: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    effectD: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    value: number

    @Column({type: DataType.TEXT, allowNull: true})
    description: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    weight: number;
}