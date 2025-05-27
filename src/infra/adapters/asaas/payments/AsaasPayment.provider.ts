import { AxiosInstance } from 'axios';

import { AxiosAuthenticatedInstanceFactory } from '../auth/AxiosAuthenticatedInstanceFactory';
import { IAsaasPaymentDTO } from './dto/IGetAsaasPaymentsDTO';
import { IGetAsaasPaymentResponseDTO } from './response/IGetAsaasPaymentResponseDTO';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AsaasPaymentProvider {
  private readonly axiosInstance: AxiosInstance;

  constructor(
    private readonly axiosAuthenticatedInstanceFactory: AxiosAuthenticatedInstanceFactory,
  ) {
    this.axiosInstance =
      this.axiosAuthenticatedInstanceFactory.generateAuthenticatedAxiosInstance();
  }
  public async getPayments({
    offset = 0,
    limit = 100,
    installment = undefined,
    customer = undefined,
    customerGroupName = undefined,
    billingType = undefined,
    status = undefined,
    subscription = undefined,
    paymentDate = undefined,
    invoiceStatus = undefined,
    estimatedCreditDate = undefined,
    pixQrCodeId = undefined,
    anticipated = undefined,
    anticipable = undefined,
    dateCreated_ge = undefined,
    dateCreated_le = undefined,
    paymentDate_ge = undefined,
    paymentDate_le = undefined,
    estimatedCreditDate_ge = undefined,
    estimatedCreditDate_le = undefined,
    dueDate_ge = undefined,
    dueDate_le = undefined,
    user = undefined,
    externalReference = undefined,
  }: {
    installment?: string;
    offset?: number;
    limit?: number;
    customer?: string;
    customerGroupName?: string;
    billingType?: string;
    status?: string;
    subscription?: string;
    externalReference?: string;
    paymentDate?: string;
    invoiceStatus?: string;
    estimatedCreditDate?: string;
    pixQrCodeId?: string;
    anticipated?: boolean;
    anticipable?: boolean;
    dateCreated_ge?: string;
    dateCreated_le?: string;
    paymentDate_ge?: string;
    paymentDate_le?: string;
    estimatedCreditDate_ge?: string;
    estimatedCreditDate_le?: string;
    dueDate_ge?: string;
    dueDate_le?: string;
    user?: string;
  }): Promise<IGetAsaasPaymentResponseDTO> {
    const params = new URLSearchParams();
    const appendParam = (
      key: string,
      value?: string | boolean | number,
    ): void => {
      if (value !== undefined) {
        params.append(key, value.toString());
      }
    };

    appendParam('installment', installment);
    appendParam('offset', offset);
    appendParam('limit', limit);
    appendParam('customer', customer);
    appendParam('customerGroupName', customerGroupName);
    appendParam('billingType', billingType);
    appendParam('status', status);
    appendParam('subscription', subscription);
    appendParam('externalReference', externalReference);
    appendParam('paymentDate', paymentDate);
    appendParam('invoiceStatus', invoiceStatus);
    appendParam('estimatedCreditDate', estimatedCreditDate);
    appendParam('pixQrCodeId', pixQrCodeId);
    appendParam('anticipated', anticipated);
    appendParam('anticipable', anticipable);
    appendParam('dateCreated[ge]', dateCreated_ge);
    appendParam('dateCreated[le]', dateCreated_le);
    appendParam('paymentDate[ge]', paymentDate_ge);
    appendParam('paymentDate[le]', paymentDate_le);
    appendParam('estimatedCreditDate[ge]', estimatedCreditDate_ge);
    appendParam('estimatedCreditDate[le]', estimatedCreditDate_le);
    appendParam('dueDate[ge]', dueDate_ge);
    appendParam('dueDate[le]', dueDate_le);
    appendParam('user', user);

    const res = await this.axiosInstance.get<IGetAsaasPaymentResponseDTO>(
      `/payments?${params}`,
    );

    return res.data;
  }

  public async createPayment(data: {
    customer: string;
    billingType: 'BOLETO' | 'CREDIT_CARD' | 'PIX';
    value: number;
    dueDate: Date;
    description?: string;
    externalReference?: string;
    installmentCount?: number;
    totalValue?: number;
    installmentValue?: number;
    remoteIp: string;
  }): Promise<IAsaasPaymentDTO> {
    const res = await this.axiosInstance.post<IAsaasPaymentDTO>(
      `/payments`,
      data,
    );

    return res.data;
  }
}
