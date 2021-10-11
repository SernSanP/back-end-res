import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  total_payed: string

  @Column()
  method: string

  @Column()
  payer_name: string

  @Column()
  payer_account: string

  @Column()
  queue_number: string

}
