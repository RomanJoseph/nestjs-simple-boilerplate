import { PrimaryEntity } from 'src/infra/database/typeorm/primary.entity';
import { Column, Entity } from 'typeorm';

@Entity('customers')
export class Customer extends PrimaryEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  user_id: string;
}
