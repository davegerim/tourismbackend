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

  @Column({ nullable: true })
  cityName: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(
    () => Attractionplace,
    (attractionplace1) => attractionplace1.City1,
    { eager: true, cascade: true },
  )
  attractionplace1: Attractionplace;
}
