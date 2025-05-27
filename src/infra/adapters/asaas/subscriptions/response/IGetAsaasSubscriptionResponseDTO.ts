export interface IGetAsaasSubscriptionResponseDTO {
  object: string;
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: Daum[];
}

interface Daum {
  object: string;
  id: string;
  dateCreated: Date;
  customer: string;
  paymentLink: string;
  billingType:
    | 'BOLETO'
    | 'CREDIT_CARD'
    | 'DEBIT_CARD'
    | 'TRANSFER'
    | 'DEPOSIT'
    | 'PIX';
  cycle:
    | 'WEEKLY'
    | 'BIWEEKLY'
    | 'MONTHLY'
    | 'BIMONTHLY'
    | 'QUARTERLY'
    | 'SEMIANNUALLY'
    | 'YEARLY';
  value: number;
  nextDueDate: Date;
  endDate?: Date;
  description: string;
  status: 'ACTIVE' | 'EXPIRED' | 'INACTIVE';
  discount?: {
    value: number;
    dueDateLimitDays: number;
    type: 'FIXED' | 'PERCENTAGE';
  };
  fine?: {
    value: number;
  };
  interest?: {
    value: number;
  };
  deleted: boolean;
  maxPayments?: number;
  externalReference?: string;
  split?: Array<{
    walletId: string;
    fixedValue?: number;
    percentualValue?: number;
    externalReference?: string;
    description?: string;
    status: 'ACTIVE' | 'DISABLED';
    disabledReason?: 'WALLET_UNABLE_TO_RECEIVE' | 'VALUE_DIVERGENCE';
  }>;
}
