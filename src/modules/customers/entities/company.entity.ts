import { PrimaryEntity } from 'src/infra/database/typeorm/primary.entity';
import { Column, Entity } from 'typeorm';

@Entity('companies')
export class Company extends PrimaryEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  customer_id: string;
}
