import { Injectable } from '@nestjs/common';
import { envConfig } from '../../env/envConfig';
import * as jwt from 'jsonwebtoken';

export interface IJwtPayload {
  id: string;
}

export interface ITokenPayload {
  iat: number;
  exp: number;
  id: string;
}

@Injectable()
export class JwtService {
  public generateToken(payloads: IJwtPayload): string {
    const { secret } = envConfig.jwt;

    const token = jwt.sign(payloads, secret);

    return token;
  }

  public verifyToken(token: string): ITokenPayload {
    const decoded = jwt.verify(token, envConfig.jwt.secret);

    return decoded as ITokenPayload;
  }
}
