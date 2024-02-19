import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from './room.entity';
@Entity()
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hotelName: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Room, (room1) => room1.Hotel1, {
    eager: true,
    cascade: true,
  })
  room1: Room[];
}
