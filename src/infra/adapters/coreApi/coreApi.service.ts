import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import * as axios from 'axios';
import { envConfig } from 'src/infra/env/envConfig';
import { IRegisterUserCoreApiServiceRequest } from './requests/IRegisterUserCoreApiServiceRequest';

@Injectable()
export class CoreApiService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = envConfig.coreApi.url!;
  }

  private getAxiosInstance(): AxiosInstance {
    return axios.default.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async registerUser(data: {
    company_name: string;
    phone_number: string;
    cnpj: string;
    password: string;
    email: string;
    name: string;
  }): Promise<any> {
    const path = 'app/external_register.php';

    const axiosInstance = this.getAxiosInstance();

    const request: IRegisterUserCoreApiServiceRequest = {
      empresa: {
        razao: 'ALTERAR AQUI',
        fantasia: data.company_name,
        cnpj: data.cnpj,
        tipo: 'J',
        id_indicacao: -1,
      },
      filial: {
        tipo: 'F',
        matriz: 'S',
        cnpj: data.cnpj,
        razao: 'ALTERAR AQUI',
        fantasia: data.company_name,
        contato: data.name,
        cep: '01001000',
        endereco: 'ALTERAR AQUI',
        numero: '0001',
        cidade: 'ALTERAR AQUI',
        uf: 'SP',
        fone: data.phone_number,
        celular: data.phone_number,
        email: data.email,
        latitude: '0.000000',
        longitude: '0.000000',
      },
      situacao: 'L',
      administrador: 'S',
      tipo_usuario: 'A',
      sexo: 'M',
      dt_nascimento: '1900-01-01',
      tipo_documento: 1,
      cpf_cnpj: data.cnpj,
      nome: data.name,
      email: data.email,
      senha: data.password,
    };

    const response = await axiosInstance.post(path, request);
    return response.data;
  }
}
