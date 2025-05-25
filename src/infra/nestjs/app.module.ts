import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UserModule } from 'src/modules/users/users.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
