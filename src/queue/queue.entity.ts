import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Queue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  queue_num: string;

  @Column()
  @IsNotEmpty()
  queue_group: string;

  @Column({ nullable: true })
  @IsNumber()
  @IsOptional()
  num_of_customer: number

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  table_id: string

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  status: string

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  delivery_by: string
}
