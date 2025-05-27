export interface IAsaasCreditCardDTO {
  holder_name: string;
  number: string;
  expiry_month: string;
  expiry_year: string;
  ccv: string;
}

export interface IAsaasCreditCardHolderInfoDTO {
  name: string;
  email: string;
  cpf_cnpj: string;
  postal_code: string;
  address_number: string;
  address_complement: string;
  phone: string;
  mobile_phone: string;
}

export interface ICreateAsaasCreditCardDTO {
  customer: string;
  credit_card: IAsaasCreditCardDTO;
  credit_card_holder_info: IAsaasCreditCardHolderInfoDTO;
  remote_ip: string;
}
