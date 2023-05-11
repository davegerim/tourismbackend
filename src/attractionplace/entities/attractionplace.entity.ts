import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
