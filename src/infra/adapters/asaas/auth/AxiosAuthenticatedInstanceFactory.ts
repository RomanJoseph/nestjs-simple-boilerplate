import axios, { AxiosInstance } from 'axios';

import { validateAsaasError } from '../errors/validateAsaasError';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAuthenticatedInstanceFactory {
  public generateAuthenticatedAxiosInstance(): AxiosInstance {
    const instance = axios.create({
      baseURL: process.env.API_ASAAS_URL,
      headers: {
        Accept: 'application/json',
        access_token: process.env.API_ASAAS_KEY,
      },
    });

    instance.interceptors.response.use(
      (response) => {
        validateAsaasError(response.data);
        return response;
      },
      (error) => {
        if (error.response) {
          validateAsaasError(error.response.data);
        }
        return Promise.reject(error);
      },
    );

    return instance;
  }
}
