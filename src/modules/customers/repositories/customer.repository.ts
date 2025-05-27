import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { PrimaryRepository } from 'src/infra/database/typeorm/primary.repository';
import { Customer } from '../entities/customer.entity';

@Injectable()
class CustomerRepository extends PrimaryRepository<Customer> {
  constructor(@Inject('DATA_SOURCE_SQL') dataSource: DataSource) {
    super(dataSource, Customer);
  }

  public async findByUserId(user_id: string): Promise<Customer | null> {
    return this.findOne({
      where: {
        user_id: user_id,
      },
    });
  }
}

export default CustomerRepository;
