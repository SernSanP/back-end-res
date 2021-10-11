import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
