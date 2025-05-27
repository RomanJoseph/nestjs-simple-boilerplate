import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  ValidateNested,
  IsEmail,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

class CustomerDto {
  @ApiProperty({ example: 'Maria Oliveira', description: 'Nome do cliente' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: '(11) 91234-5678',
    description: 'Telefone do cliente',
  })
  @IsString()
  @MinLength(8)
  phone: string;

  @ApiProperty({
    example: 'cliente@email.com',
    description: 'Email do cliente',
  })
  @IsEmail()
  email: string;
}

class CompanyDto {
  @ApiProperty({
    example: 'Minha Empresa LTDA',
    description: 'Nome da empresa',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: '12345678000195',
    description: 'CNPJ da empresa (somente números)',
  })
  @IsString()
  @Length(14, 14, { message: 'O CNPJ deve conter exatamente 14 dígitos' })
  cnpj: string;
}

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

  @ApiProperty({ type: CustomerDto })
  @ValidateNested()
  @Type(() => CustomerDto)
  customer: CustomerDto;

  @ApiProperty({ type: CompanyDto })
  @ValidateNested()
  @Type(() => CompanyDto)
  company: CompanyDto;
}
