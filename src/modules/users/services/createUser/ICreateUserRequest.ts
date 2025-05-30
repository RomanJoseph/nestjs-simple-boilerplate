export interface ICreateUserRequest {
  name: string;
  login: string;
  password: string;
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  company: {
    name: string;
    cnpj: string;
  };
}
