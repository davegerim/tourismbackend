import { Attractionplace } from 'src/attractionplace/entities/attractionplace.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToOne(() => Attractionplace, (attractionplace1) => attractionplace1.City1)
  @JoinColumn()
  attractionplace1: Attractionplace;
}
