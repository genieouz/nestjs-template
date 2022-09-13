import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '~/user/user.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UserModule],
  providers: [AuthService, AuthResolver],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
