export interface ICreateCustomerServiceRequest {
  customer: {
    name: string;
    email: string;
    phone: string;
    user_id: string;
  };
  company: {
    name: string;
    cnpj: string;
  };
}
