import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import UserRepository from './repositories/user.repository';
import { CreateUserService } from './services/createUser/createUser.service';
import { HashService } from 'src/infra/adapters/hash/hash.service';
import { JwtService } from 'src/infra/adapters/jwt/jwt.service';
import { AuthenticateUserService } from './services/authenticateUser/authenticateUser.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    /* Services */
    CreateUserService,
    AuthenticateUserService,
    /* Repositories */
    UserRepository,
    /* Utils */
    HashService,
    JwtService,
  ],
  exports: [CreateUserService, AuthenticateUserService],
})
export class UserModule {}
