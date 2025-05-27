import { IAsaasPaymentDTO } from '../dto/IGetAsaasPaymentsDTO';

export interface IGetAsaasPaymentResponseDTO {
  object: string;
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: IAsaasPaymentDTO[];
}
