import { Exclude } from 'class-transformer';
import { PrimaryEntity } from 'src/infra/database/typeorm/primary.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends PrimaryEntity {
  @Column({ name: 'login' })
  login: string;

  @Exclude()
  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'name' })
  name: string;
}
