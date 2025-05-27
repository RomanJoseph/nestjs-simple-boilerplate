export interface IAsaasSubscriptionDTO {
  id?: string;
  customer: string;
  billingType: 'BOLETO' | 'CREDIT_CARD' | 'PIX';
  value: number;
  nextDueDate: Date;
  fine?: {
    value: number;
    once: boolean;
  };
  cycle: 'MONTHLY' | 'YEARLY';
  description?: string;
  creditCard?: {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
  };
  creditCardToken?: string;
  status?: string;
  endDate?: string;
  maxPayments?: number;
  externalReference?: string;

  // UPDATE
  updatePendingPayments?: boolean;
}
