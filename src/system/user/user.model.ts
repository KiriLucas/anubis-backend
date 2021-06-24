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
    static async makeUpperCase(instance: UserModel) {
        // this will be called when an instance is created or updated
        instance.password = await hash(instance.password, 10)
      }

    // @BeforeCreate
    // static beforeCreateHook(instance: UserModel, options: any){
    //     instance.password = hash(instance.password, 10) 
    // }
    // @BeforeCreate
    // async hashPassword(){
    //     this.password = await hash(this.password, 10)
    // }
}