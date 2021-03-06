import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'inventories', underscored: true, timestamps: false})
export class InventoryModel extends Model {
    
    @Column({type: DataType.INTEGER, allowNull: false })
    characterId: number;
    
    @Column({type: DataType.INTEGER, allowNull: false })
    itemId: number;
    
    @Column({type: DataType.INTEGER, allowNull: false })
    category: number;
    
    @Column({type: DataType.TEXT, allowNull: false })
    details: string;
    
    @Column({type: DataType.INTEGER, allowNull: false })
    amount: number;

    @Column({type: DataType.INTEGER, allowNull: false })
    weight: number;
}