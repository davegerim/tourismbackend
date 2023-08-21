import { Attractionplace } from 'src/attractionplace/entities/attractionplace.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hotel } from './hotel.entity';
@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  roomName: string;

  @Column()
  bed: string;

  @Column()
  person: string;

  @Column()
  area: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  price: string;

  @Column()
  rate: string;

  @ManyToOne(() => Hotel, (Hotel1) => Hotel1.room1)
  @JoinColumn() // specify inverse side as a second parameter
  Hotel1: Hotel;
}
