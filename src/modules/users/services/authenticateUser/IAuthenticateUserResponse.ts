import { User } from '../../entities/user.entity';

export interface IAuthenticateUserResponse {
  token: string;
  user: User;
}
