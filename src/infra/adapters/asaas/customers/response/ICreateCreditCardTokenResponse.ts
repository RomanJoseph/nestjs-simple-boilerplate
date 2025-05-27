export interface ICreateCreditCardTokenResponse {
  creditCardNumber: string;
  creditCardBrand:
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
  creditCardToken: string;
}
