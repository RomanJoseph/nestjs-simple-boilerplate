import { ConflictException, Injectable } from '@nestjs/common';
import CustomerRepository from '../../repositories/customer.repository';
import { ICreateCustomerServiceRequest } from './ICreateCustomerServiceRequest';
import { ICreateCustomerServiceResponse } from './ICreateCustomerResponse';
import CompanyRepository from '../../repositories/company.repository';

@Injectable()
export class CreateCustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly companyRepository: CompanyRepository,
  ) {}

  public async execute(
    data: ICreateCustomerServiceRequest,
  ): Promise<ICreateCustomerServiceResponse> {
    const customer = await this.customerRepository.findByUserId(
      data.customer.user_id,
    );

    if (customer) {
      throw new ConflictException('Customer already exists');
    }

    const newCustomer = await this.customerRepository.save(data.customer);

    const company = await this.companyRepository.save({
      ...data.company,
      customer_id: newCustomer.id,
    });

    return {
      customer: newCustomer,
      company,
    };
  }
}
