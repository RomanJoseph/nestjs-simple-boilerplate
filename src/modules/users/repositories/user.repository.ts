import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { PrimaryRepository } from 'src/infra/database/typeorm/primary.repository';
import { User } from '../entities/user.entity';

@Injectable()
class UserRepository extends PrimaryRepository<User> {
  constructor(@Inject('DATA_SOURCE_SQL') dataSource: DataSource) {
    super(dataSource, User);
  }

  public async findByLogin(login: string): Promise<User | null> {
    return this.findOne({
      where: { login },
    });
  }
}

export default UserRepository;
