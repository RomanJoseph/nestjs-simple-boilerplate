import { User } from 'src/modules/users/entities/user.entity';

export class ILoginUserResponse {
  token: string;
  user: {
    id: string;
    login: string;
    name: string;
    created_at: Date;
    updated_at: Date;
  };
}
