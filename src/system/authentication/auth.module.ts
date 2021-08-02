import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [UserModule, PassportModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}