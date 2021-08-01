import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}