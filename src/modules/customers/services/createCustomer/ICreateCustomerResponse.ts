export interface ICreateCustomerServiceResponse {
  customer: {
    id: string;
    name: string;
    email: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
  };
  company: {
    id: string;
    cnpj: string;
    name: string;
    customer_id: string;
    created_at: Date;
    updated_at: Date;
  };
}
