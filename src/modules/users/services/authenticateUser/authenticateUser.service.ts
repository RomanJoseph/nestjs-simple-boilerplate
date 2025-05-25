import { Injectable, UnauthorizedException } from '@nestjs/common';
import UserRepository from '../../repositories/user.repository';
import { HashService } from 'src/infra/adapters/hash/hash.service';
import { JwtService } from 'src/infra/adapters/jwt/jwt.service';
import { IAuthenticateUserRequest } from './IAuthenticateUserRequest';
import { IAuthenticateUserResponse } from './IAuthenticateUserResponse';

@Injectable()
export class AuthenticateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}

  public async execute(
    data: IAuthenticateUserRequest,
  ): Promise<IAuthenticateUserResponse> {
    const user = await this.userRepository.findByLogin(data.login);

    if (!user) {
      throw new UnauthorizedException('User or password are incorrect !');
    }

    const isPasswordValid = await this.hashService.comparePassword(
      data.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('User or password are incorrect !');
    }

    const token = this.jwtService.generateToken({
      id: user.id,
    });

    return {
      token,
      user,
    };
  }
}
