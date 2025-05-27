import { AxiosInstance } from 'axios';

import { AxiosAuthenticatedInstanceFactory } from '../auth/AxiosAuthenticatedInstanceFactory';
import { IAsaasSubscriptionDTO } from './dto/IAsaasSubscriptionDTO';
import { IGetAsaasSubscriptionResponseDTO } from './response/IGetAsaasSubscriptionResponseDTO';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';

@Injectable()
export class AsaasSubscriptionProvider {
  private readonly axiosInstance: AxiosInstance;

  constructor(
    private readonly axiosAuthenticatedInstanceFactory: AxiosAuthenticatedInstanceFactory,
  ) {
    this.axiosInstance =
      this.axiosAuthenticatedInstanceFactory.generateAuthenticatedAxiosInstance();
  }

  public async getSubscriptions({
    offset = 0,
    limit = 100,
    customer,
    customerGroupName,
    billingType,
    status,
    deletedOnly,
    includeDeleted,
    externalReference,
    order,
    sort,
  }: {
    offset?: number;
    limit?: number;
    customer?: string;
    customerGroupName?: string;
    billingType?: string;
    status?: string;
    deletedOnly?: string;
    includeDeleted?: string;
    externalReference?: string;
    order?: string;
    sort?: string;
  }): Promise<IGetAsaasSubscriptionResponseDTO> {
    const params = new URLSearchParams();

    if (offset) params.append('offset', offset.toString());
    if (limit) params.append('limit', limit.toString());
    if (customer) params.append('customer', customer);
    if (customerGroupName)
      params.append('customerGroupName', customerGroupName);
    if (billingType) params.append('billingType', billingType);
    if (status) params.append('status', status);
    if (deletedOnly) params.append('deletedOnly', deletedOnly);
    if (includeDeleted) params.append('includeDeleted', includeDeleted);
    if (externalReference)
      params.append('externalReference', externalReference);
    if (order) params.append('order', order);
    if (sort) params.append('sort', sort);

    const res = await this.axiosInstance.get<IGetAsaasSubscriptionResponseDTO>(
      `/subscriptions?${params.toString()}`,
    );

    return res.data;
  }

  public async createSubscription({
    customer,
    billingType,
    value,
    nextDueDate,
    cycle,
    creditCard,
    creditCardToken,
    description = undefined,
    endDate = undefined,
    maxPayments = undefined,
    externalReference = undefined,
  }: IAsaasSubscriptionDTO): Promise<IAsaasSubscriptionDTO> {
    const res = await this.axiosInstance.post<IAsaasSubscriptionDTO>(
      `/subscriptions`,
      {
        customer,
        billingType,
        value,
        nextDueDate,
        cycle,
        creditCard,
        creditCardToken,
        description,
        endDate,
        maxPayments,
        externalReference,
      },
    );

    return res.data;
  }

  public async deleteSubscription(id: string): Promise<{
    deleted: boolean;
    id: string;
  }> {
    try {
      const res = await this.axiosInstance.delete(`/subscriptions/${id}`);
      return res.data;
    } catch (err) {
      throw new ServiceUnavailableException(err);
    }
  }

  public async updateSubscription(
    id,
    {
      customer = undefined,
      billingType = undefined,
      value = undefined,
      nextDueDate = undefined,
      cycle = undefined,
      description = undefined,
      endDate = undefined,
      maxPayments = undefined,
      externalReference = undefined,
      updatePendingPayments = undefined,
    }: Partial<IAsaasSubscriptionDTO>,
  ): Promise<IAsaasSubscriptionDTO> {
    const res = await this.axiosInstance.put<IAsaasSubscriptionDTO>(
      `/subscriptions/${id}`,
      {
        customer,
        billingType,
        value,
        nextDueDate,
        cycle,
        description,
        endDate,
        maxPayments,
        externalReference,
        updatePendingPayments,
      },
    );

    return res.data;
  }
}
