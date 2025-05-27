import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { PrimaryRepository } from 'src/infra/database/typeorm/primary.repository';
import { Company } from '../entities/company.entity';

@Injectable()
class CompanyRepository extends PrimaryRepository<Company> {
  constructor(@Inject('DATA_SOURCE_SQL') dataSource: DataSource) {
    super(dataSource, Company);
  }

  public async findByCustomerId(customer_id: string): Promise<Company | null> {
    return this.findOne({
      where: {
        customer_id,
      },
    });
  }
}

export default CompanyRepository;
