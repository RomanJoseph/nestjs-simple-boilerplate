import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  private readonly SALT: number;
  constructor() {
    this.SALT = 10;
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT);
  }

  async comparePassword(
    password: string,
    encryptedPassword: string,
  ): Promise<boolean> {
    const isValid = await bcrypt.compare(password, encryptedPassword);
    return isValid;
  }
}
