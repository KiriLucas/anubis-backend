import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: 'attributes', underscored: true, timestamps: false})
export class AttributesModel extends Model {

    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    characterId: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    currentHp: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    maxHp: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    currentEnergy: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    maxEnergy: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    strength: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    dexterity: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    agility: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    intelligence: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    vitality: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    charisma: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    wisdom: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    will: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    physicalDamage: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    physicalDefense: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    magicDamage: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    magicDefense: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    hitChance: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    fleeChance: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    critical: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    attackSpeed: number;

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