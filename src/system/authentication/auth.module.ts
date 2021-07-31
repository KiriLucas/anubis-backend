import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
    imports: [UserModule],
    controllers: [],
    providers: [AuthService],
})
export class AuthModule {}