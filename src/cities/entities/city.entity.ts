import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cityName: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;
}
