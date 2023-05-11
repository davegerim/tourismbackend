import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  country: string;

  @Column()
  city: string;

  @Column()
  subcity: string;

  @Column()
  woreda: string;

  @Column()
  housenumber: string;
}
