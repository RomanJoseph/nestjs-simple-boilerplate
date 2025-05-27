export interface IAsaasCustomerDTO {
  id?: string;
  name: string;
  cpfCnpj?: string;
  email?: string;
  phone?: string;
  mobilePhone?: string;
  foreignCustomer?: boolean;
  company?: string;
  groupName?: string;
  observations?: string;
  stateInscription?: string;
  municipalInscription?: string;
  additionalEmails?: string;
  externalReference?: string;
  postalCode?: string;
  notificationDisabled?: boolean;
  province?: string;
  complement?: string;
  addressNumber?: string;
  address?: string;
}
