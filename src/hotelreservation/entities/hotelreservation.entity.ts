import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Hotelreservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  roomType: string;

  @Column()
  noofGuests: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
