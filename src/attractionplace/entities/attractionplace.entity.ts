import { City } from 'src/cities/entities/city.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Attractionplace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  placeName: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  price: string;

  @Column()
  rate: string;

  @ManyToOne(() => City, (City1) => City1.attractionplace1) // specify inverse side as a second parameter
  City1: City;
}
