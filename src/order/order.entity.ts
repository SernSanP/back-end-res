import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  category: string;

  // @Column({ nullable: true })
  // @IsOptional()
  // topping: string[];

  @Column()
  @IsNotEmpty()
  @IsString()
  queue_id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  status: string;

}
