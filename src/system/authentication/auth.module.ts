import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';

@Module({
    imports: [UserModule],
    providers: [AuthService],
})
export class AuthModule {}