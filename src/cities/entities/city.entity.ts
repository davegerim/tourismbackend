import { Attractionplace } from 'src/attractionplace/entities/attractionplace.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
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

  @Column()
  image: string;

  @OneToMany(
    () => Attractionplace,
    (attractionplace1) => attractionplace1.City1,
    { eager: true },
  )
  attractionplace1: Attractionplace;
}
