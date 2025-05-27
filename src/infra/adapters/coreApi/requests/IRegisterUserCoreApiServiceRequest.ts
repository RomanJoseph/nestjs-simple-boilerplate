export interface Empresa {
  razao: 'ALTERAR AQUI';
  fantasia: string;
  cnpj: string;
  tipo: 'J';
  id_indicacao: -1;
}

export interface Filial {
  tipo: 'F';
  matriz: 'S';
  cnpj: string;
  razao: 'ALTERAR AQUI';
  fantasia: string;
  contato: string;
  cep: '01001000';
  endereco: 'ALTERAR AQUI';
  numero: '0001';
  cidade: 'ALTERAR AQUI';
  uf: 'SP';
  fone: string;
  celular: string;
  email: string;
  latitude: '0.000000';
  longitude: '0.000000';
}

export interface IRegisterUserCoreApiServiceRequest {
  empresa: Empresa;
  filial: Filial;
  situacao: 'L';
  administrador: 'S';
  tipo_usuario: 'A';
  sexo: 'M';
  dt_nascimento: '1900-01-01';
  tipo_documento: 1;
  cpf_cnpj: string;
  nome: string;
  email: string;
  senha: string;
}
