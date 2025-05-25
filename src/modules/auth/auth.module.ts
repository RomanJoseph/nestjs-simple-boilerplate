import { Module } from '@nestjs/common';
import { UserModule } from '../users/users.module';
import { AuthController } from './controllers/AuthController';
import { JwtAuthGuard } from './guard/jwtAuth.guard';
import { JwtService } from 'src/infra/adapters/jwt/jwt.service';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [JwtAuthGuard, JwtService],
})
export class AuthModule {}
