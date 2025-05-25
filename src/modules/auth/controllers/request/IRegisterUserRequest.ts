import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class IRegisterUserRequest {
  @ApiProperty({ example: 'joao123', description: 'Login único do usuário' })
  @IsString()
  @MinLength(4)
  login: string;

  @ApiProperty({ example: 'senhaSecreta', description: 'Senha do usuário' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'João Silva',
    description: 'Nome completo do usuário',
  })
  @IsString()
  @MinLength(3)
  name: string;
}
