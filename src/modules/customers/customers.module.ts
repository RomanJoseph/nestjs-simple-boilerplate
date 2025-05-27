import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateCustomerService } from './services/createCustomer/createCustomer.service';
import CustomerRepository from './repositories/customer.repository';
import CompanyRepository from './repositories/company.repository';

@Module({
  imports: [DatabaseModule],
  providers: [CreateCustomerService, CustomerRepository, CompanyRepository],
  exports: [CreateCustomerService],
})
export class CustomersModule {}
