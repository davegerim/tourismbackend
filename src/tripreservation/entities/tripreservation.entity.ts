import { Attractionplace } from 'src/attractionplace/entities/attractionplace.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tripreservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  noofGuests: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  placeId: string;
  // @ManyToOne(
  //   () => Attractionplace,
  //   (Attractionplace1) => Attractionplace1.Tripreservation1,
  // ) // specify inverse side as a second parameter
  // Attractionplace1: Attractionplace;
}
