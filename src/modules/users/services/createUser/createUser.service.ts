import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ICreateUserRequest } from './ICreateUserRequest';
import { ICreateUserResponse } from './ICreateUserResponse';
import { HashService } from 'src/infra/adapters/hash/hash.service';
import UserRepository from '../../repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly hashService: HashService,
    private readonly userRepository: UserRepository,
  ) {}

  public async execute(
    command: ICreateUserRequest,
  ): Promise<ICreateUserResponse> {
    const user = await this.userRepository.findByLogin(command.login);

    if (user) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await this.hashService.hashPassword(
      command.password,
    );

    const newUser = await this.userRepository.save({
      ...command,
      password: hashedPassword,
    });

    return {
      id: newUser.id,
      login: newUser.login,
      name: newUser.name,
      created_at: newUser.created_at,
      updated_at: newUser.updated_at,
    };
  }
}
