import { InternalServerErrorException } from '@nestjs/common';

export const validateAsaasError = (err: any): void => {
  if (err.type === 'error')
    throw new InternalServerErrorException(
      'Erro ao se comunicar com o Asaas: ' + err,
    );
};
