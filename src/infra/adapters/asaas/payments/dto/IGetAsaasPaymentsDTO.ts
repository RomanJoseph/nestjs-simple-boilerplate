export interface IAsaasPaymentDTO {
  object?: string;
  id?: string;
  dateCreated?: Date;
  customer: string;
  subscription?: string;
  installment?: string;
  paymentLink?: string;
  value: number;
  netValue?: number;
  originalValue?: number;
  interestValue?: number;
  description?: string;
  paymentType:
    | 'UNDEFINED'
    | 'BOLETO'
    | 'CREDIT_CARD'
    | 'DEBIT_CARD'
    | 'TRANSFER'
    | 'DEPOSIT'
    | 'PIX';
  creditCard?: {
    creditCardNumber?: string;
    creditCardBrand?:
      | 'VISA'
      | 'MASTERCARD'
      | 'ELO'
      | 'DINERS'
      | 'DISCOVER'
      | 'AMEX'
      | 'HIPERCARD'
      | 'CABAL'
      | 'BANESCARD'
      | 'CREDZ'
      | 'SOROCRED'
      | 'CREDSYSTEM'
      | 'JCB'
      | 'UNKNOWN';
    creditCardToken?: string;
  };
  canBePaidAfterDueDate?: boolean;
  pixTransaction?: string;
  pixQrCodeId?: string;
  status?:
    | 'PENDING'
    | 'RECEIVED'
    | 'CONFIRMED'
    | 'OVERDUE'
    | 'REFUNDED'
    | 'RECEIVED_IN_CASH'
    | 'REFUND_REQUESTED'
    | 'REFUND_IN_PROGRESS'
    | 'CHARGEBACK_REQUESTED'
    | 'CHARGEBACK_DISPUTE'
    | 'AWAITING_CHARGEBACK_REVERSAL'
    | 'DUNNING_REQUESTED'
    | 'DUNNING_RECEIVED'
    | 'AWAITING_RISK_ANALYSIS';
  dueDate: Date;
  originalDueDate?: Date;
  paymentDate?: Date;
  clientPaymentDate?: Date;
  installmentNumber?: number;
  invoiceUrl?: string;
  invoiceNumber?: string;
  externalReference?: string;
  deleted?: boolean;
  anticipated?: boolean;
  anticipable?: boolean;
  creditDate?: Date;
  estimatedCreditDate?: Date;
  transactionReceiptUrl?: string;
  nossoNumero?: string;
  bankSlipUrl?: string;
  discount?: {
    value?: number;
    dueDateLimitDays?: number;
    type?: 'FIXED' | 'PERCENTAGE';
  };
  fine?: {
    value?: number;
  };
  interest?: {
    value?: number;
  };
  split?: Array<{
    objectId?: string;
    walletId?: string;
    fixedValue?: number;
    percentualValue?: number;
    totalValue?: number;
    cancellationReason?:
      | 'PAYMENT_DELETED'
      | 'PAYMENT_OVERDUE'
      | 'PAYMENT_RECEIVED_IN_CASH'
      | 'PAYMENT_REFUNDED'
      | 'VALUE_DIVERGENCE_BLOCK'
      | 'WALLET_UNABLE_TO_RECEIVE';
    status?:
      | 'PENDING'
      | 'AWAITING_CREDIT'
      | 'CANCELLED'
      | 'DONE'
      | 'REFUNDED'
      | 'BLOCKED_BY_VALUE_DIVERGENCE';
    externalReference?: string;
    description?: string;
  }>;
  postalService?: boolean;
  daysAfterDueDateToRegistrationCancellation?: number;
  chargeback?: {
    id?: string;
    payment?: string;
    installment?: string;
    customerAccount?: string;
    status?: 'REQUESTED' | 'IN_DISPUTE' | 'DISPUTE_LOST' | 'REVERSED' | 'DONE';
    reason?:
      | 'ABSENCE_OF_PRINT'
      | 'ABSENT_CARD_FRAUD'
      | 'CARD_ACTIVATED_PHONE_TRANSACTION'
      | 'CARD_FRAUD'
      | 'CARD_RECOVERY_BULLETIN'
      | 'COMMERCIAL_DISAGREEMENT'
      | 'COPY_NOT_RECEIVED'
      | 'CREDIT_OR_DEBIT_PRESENTATION_ERROR'
      | 'DIFFERENT_PAY_METHOD'
      | 'FRAUD'
      | 'INCORRECT_TRANSACTION_VALUE'
      | 'INVALID_CURRENCY'
      | 'INVALID_DATA'
      | 'LATE_PRESENTATION'
      | 'LOCAL_REGULATORY_OR_LEGAL_DISPUTE'
      | 'MULTIPLE_ROCS'
      | 'ORIGINAL_CREDIT_TRANSACTION_NOT_ACCEPTED'
      | 'OTHER_ABSENT_CARD_FRAUD'
      | 'PROCESS_ERROR'
      | 'RECEIVED_COPY_ILLEGIBLE_OR_INCOMPLETE'
      | 'RECURRENCE_CANCELED'
      | 'REQUIRED_AUTHORIZATION_NOT_GRANTED'
      | 'RIGHT_OF_FULL_RECOURSE_FOR_FRAUD'
      | 'SALE_CANCELED'
      | 'SERVICE_DISAGREEMENT_OR_DEFECTIVE_PRODUCT'
      | 'SERVICE_NOT_RECEIVED'
      | 'SPLIT_SALE'
      | 'TRANSFERS_OF_DIVERSE_RESPONSIBILITIES'
      | 'UNQUALIFIED_CAR_RENTAL_DEBIT'
      | 'USA_CARDHOLDER_DISPUTE'
      | 'VISA_FRAUD_MONITORING_PROGRAM'
      | 'WARNING_BULLETIN_FILE';
    disputeStartDate?: Date;
    value?: number;
    paymentDate?: Date;
    creditCard?: object;
    disputeStatus?: 'REQUESTED' | 'ACCEPTED' | 'REJECTED';
    deadlineToSendDisputeDocuments?: Date;
  };
  refunds?: Array<{
    dateCreated?: Date;
    status?:
      | 'PENDING'
      | 'AWAITING_CRITICAL_ACTION_AUTHORIZATION'
      | 'AWAITING_CUSTOMER_EXTERNAL_AUTHORIZATION'
      | 'CANCELLED'
      | 'DONE';
    value?: number;
    endToEndIdentifier?: string;
    description?: string;
    effectiveDate?: Date;
    transactionReceiptUrl?: string;
    refundedSplits?: Array<{
      id?: string;
      value?: number;
      done?: boolean;
    }>;
  }>;
}
