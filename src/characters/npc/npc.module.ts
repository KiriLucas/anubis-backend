import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { NpcController } from './npc.controller';
import { NpcModel } from './npc.model';
import { NpcService } from './npc.service';


@Module({
    imports: [    
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          autoLoadModels: true,
          synchronize: true,
        }),
        SequelizeModule.forFeature([NpcModel]),
    ],
    controllers: [NpcController],
    providers: [NpcService],
})
export class NpcModule { }