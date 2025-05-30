import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { CreateUserService } from 'src/modules/users/services/createUser/createUser.service';
import { IRegisterUserRequest } from './request/IRegisterUserRequest';
import { IRegisterUserResponse } from './response/IRegisterUserResponse';
import { AuthenticateUserService } from 'src/modules/users/services/authenticateUser/authenticateUser.service';
import { ILoginUserResponse } from './response/ILoginUserResponse';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ILoginUserRequest } from './request/ILoginUserRequest';
import { Auth } from 'src/shared/decorators/auth.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly authenticateUserService: AuthenticateUserService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Registra um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso.',
    type: IRegisterUserResponse,
  })
  async register(
    @Body() dto: IRegisterUserRequest,
  ): Promise<IRegisterUserResponse> {
    return this.createUserService.execute(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Autentica um usuário e retorna um token JWT' })
  @ApiResponse({
    status: 200,
    description: 'Autenticação bem-sucedida.',
    type: ILoginUserResponse,
  })
  async login(@Body() dto: ILoginUserRequest): Promise<ILoginUserResponse> {
    return this.authenticateUserService.execute(dto);
  }

  @Get('validate')
  @Auth()
  @ApiOperation({
    summary: 'Valida o token JWT e retorna o payload do usuário',
  })
  @ApiResponse({ status: 200, description: 'Token válido' })
  validateToken(@Req() req: any) {
    return {
      valid: true,
      user: req.user,
    };
  }
}
