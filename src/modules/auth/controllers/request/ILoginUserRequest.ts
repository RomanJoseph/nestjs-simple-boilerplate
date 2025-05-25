import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ILoginUserRequest {
  @ApiProperty({ example: 'joao123', description: 'Login do usuário' })
  @IsString()
  login: string;

  @ApiProperty({ example: 'senhaSecreta', description: 'Senha do usuário' })
  @IsString()
  password: string;
}
