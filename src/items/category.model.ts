import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'item_category', underscored: true, timestamps: false})
export class ItemCategoryModel extends Model {
    
    @Column({type: DataType.STRING, allowNull: false })
    name: string;
}