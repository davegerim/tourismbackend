import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hotelName: string;

  @Column()
  description: string;

  @Column()
  image: string;
}
