import { AxiosInstance } from 'axios';

import { AxiosAuthenticatedInstanceFactory } from '../auth/AxiosAuthenticatedInstanceFactory';
import { ICreateAsaasCreditCardDTO } from './dto/IAsaasCreditCardDTO';
import { IAsaasCustomerDTO } from './dto/IAsaasCustomerDTO';
import { ICreateCreditCardTokenResponse } from './response/ICreateCreditCardTokenResponse';
import { IGetAsaasCostumerResponseDTO } from './response/IGetAsaasCustomerResponseDTO';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AsaasCustomerProvider {
  private readonly axiosInstance: AxiosInstance;

  constructor(
    private readonly axiosAuthenticatedInstanceFactory: AxiosAuthenticatedInstanceFactory,
  ) {
    this.axiosInstance =
      this.axiosAuthenticatedInstanceFactory.generateAuthenticatedAxiosInstance();
  }

  public async getCustomers({
    offset = 0,
    limit = 100,
    name,
    email,
    cpfCnpj,
    groupName,
    externalReference,
  }: {
    offset?: number;
    limit?: number;
    name?: string;
    email?: string;
    cpfCnpj?: string;
    groupName?: string;
    externalReference?: string;
  }): Promise<IGetAsaasCostumerResponseDTO> {
    const params = new URLSearchParams();

    if (offset) params.append('offset', offset.toString());
    if (limit) params.append('limit', limit.toString());
    if (name) params.append('name', name);
    if (email) params.append('email', email);
    if (cpfCnpj) params.append('cpfCnpj', cpfCnpj);
    if (groupName) params.append('groupName', groupName);
    if (externalReference)
      params.append('externalReference', externalReference);

    const res = await this.axiosInstance.get<IGetAsaasCostumerResponseDTO>(
      `/customers?${params.toString()}`,
    );

    return res.data;
  }

  public async getCustomer(id: string): Promise<IAsaasCustomerDTO> {
    const res = await this.axiosInstance.get<IAsaasCustomerDTO>(
      `/customers/${id}`,
    );

    return res.data;
  }

  public async createCustomer({
    name,
    cpfCnpj = undefined,
    email = undefined,
    phone = undefined,
    mobilePhone = undefined,
    address = undefined,
    addressNumber = undefined,
    complement = undefined,
    province = undefined,
    postalCode = undefined,
    externalReference = undefined,
    notificationDisabled = undefined,
    additionalEmails = undefined,
    municipalInscription = undefined,
    stateInscription = undefined,
    observations = undefined,
    groupName = undefined,
    company = undefined,
    foreignCustomer = undefined,
  }: IAsaasCustomerDTO): Promise<IAsaasCustomerDTO> {
    const res = await this.axiosInstance.post<IAsaasCustomerDTO>(`/customers`, {
      name,
      cpfCnpj,
      email,
      phone,
      mobilePhone,
      address,
      addressNumber,
      complement,
      province,
      postalCode,
      externalReference,
      notificationDisabled,
      additionalEmails,
      municipalInscription,
      stateInscription,
      observations,
      groupName,
      company,
      foreignCustomer,
    });

    return res.data;
  }

  public async updateCustomer(
    id: string,
    {
      name = undefined,
      cpfCnpj = undefined,
      email = undefined,
      phone = undefined,
      mobilePhone = undefined,
      address = undefined,
      addressNumber = undefined,
      complement = undefined,
      province = undefined,
      postalCode = undefined,
      externalReference = undefined,
      notificationDisabled = undefined,
      additionalEmails = undefined,
      municipalInscription = undefined,
      stateInscription = undefined,
      observations = undefined,
      groupName = undefined,
      company = undefined,
      foreignCustomer = undefined,
    }: Partial<IAsaasCustomerDTO>,
  ): Promise<IGetAsaasCostumerResponseDTO> {
    const res = await this.axiosInstance.put(`/customers/${id}`, {
      name,
      cpfCnpj,
      email,
      phone,
      mobilePhone,
      address,
      addressNumber,
      complement,
      province,
      postalCode,
      externalReference,
      notificationDisabled,
      additionalEmails,
      municipalInscription,
      stateInscription,
      observations,
      groupName,
      company,
      foreignCustomer,
    });

    return res.data;
  }

  public async deleteCustomer(
    id: string,
  ): Promise<{ deleted: boolean; id: string }> {
    const res = await this.axiosInstance.delete(`/customers/${id}`);

    return res.data;
  }

  public async generateCreditCardToken(
    data: ICreateAsaasCreditCardDTO,
  ): Promise<ICreateCreditCardTokenResponse> {
    const res = await this.axiosInstance.post(
      `/creditCard/tokenizeCreditCard`,
      {
        customer: data.customer,
        creditCard: {
          holderName: data.credit_card.holder_name,
          number: data.credit_card.number,
          expiryMonth: data.credit_card.expiry_month,
          expiryYear: data.credit_card.expiry_year,
          ccv: data.credit_card.ccv,
        },
        creditCardHolderInfo: {
          ...data.credit_card_holder_info,
          holderName: data.credit_card_holder_info.name,
          cpfCnpj: data.credit_card_holder_info.cpf_cnpj,
          postalCode: data.credit_card_holder_info.postal_code,
          addressNumber: data.credit_card_holder_info.address_number,
          addressComplement: data.credit_card_holder_info.address_complement,
          phone: data.credit_card_holder_info.phone,
          mobilePhone: data.credit_card_holder_info.mobile_phone,
        },
        remoteIp: data.remote_ip,
      },
    );

    return res.data;
  }
}
