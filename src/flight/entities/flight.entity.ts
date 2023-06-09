import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  calander: string;

  @Column()
  departureDate: string;

  @Column()
  returnDate: string;

  @Column()
  male: string;

  @Column()
  female: string;

  @Column()
  child: string;

  @Column()
  cabinClass: string;
}
