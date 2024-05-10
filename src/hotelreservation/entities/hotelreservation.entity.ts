import { Hotel } from 'src/hotel/entities/hotel.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Hotelreservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

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

  @Column({ nullable: true })
  roomPrice: string;

  @Column({ nullable: true, default: "pending" })
  status: string;

  @Column()
  hotels: string;
}
