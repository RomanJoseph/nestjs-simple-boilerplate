import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ICreateUserRequest } from './ICreateUserRequest';
import { ICreateUserResponse } from './ICreateUserResponse';
import { HashService } from 'src/infra/adapters/hash/hash.service';
import UserRepository from '../../repositories/user.repository';
import { CreateCustomerService } from 'src/modules/customers/services/createCustomer/createCustomer.service';
import { CoreApiService } from 'src/infra/adapters/coreApi/coreApi.service';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly hashService: HashService,
    private readonly userRepository: UserRepository,
    private readonly createCustomerService: CreateCustomerService,
    private readonly coreApiService: CoreApiService,
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

    const customer = await this.createCustomerService.execute({
      company: {
        ...command.company,
      },
      customer: {
        ...command.customer,
        user_id: newUser.id,
      },
    });

    await this.coreApiService.registerUser({
      company_name: command.company.name,
      phone_number: command.customer.email,
      cnpj: command.company.cnpj,
      email: command.customer.email,
      password: command.password,
      name: command.customer.name,
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
