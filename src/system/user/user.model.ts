import { Table, Model, Column, DataType, BeforeCreate, BeforeSave, BeforeBulkCreate } from "sequelize-typescript";
import {hash} from 'bcrypt';

@Table({ tableName: 'users', underscored: true})
export class UserModel extends Model<UserModel> {

    @Column({ type: DataType.STRING, allowNull: false })
    username: string;

    @Column({ type: DataType.STRING, allowNull: true })
    realName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: true })
    bio: string;

    @Column({ type: DataType.STRING, allowNull: true })
    image: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @BeforeCreate
    static async hashPassword(instance: UserModel) {
        instance.password = await hash(instance.password, 10)
    }
}